#!/bin/bash

# verif 3
# Vérifier que l'utilisateur est root
if [ "$EUID" -ne 0 ]; then
  echo "try again"
  exit 1
fi

HTACCESS="/var/www/manga/.htaccess"
URL="http://127.0.0.1"
HOST_HEADER="Host: manga.lan"
EXPECTED_TITLE="<title>Manga Auth System</title>"

# Nouveau flag à afficher si tout est bon
FLAG="SYS_{htaccess_and_web_ok}"

REQUIRED_LINES=(
  "RewriteCond %{REQUEST_FILENAME}"
  "RewriteRule ^.*$ - [NC,L]"
  "RewriteRule ^(.*) /index.html [NC,L]"
)

echo "checking ..."
sleep 3

# Vérifie que le fichier .htaccess existe
if [ ! -f "$HTACCESS" ]; then
  echo "try again"
  exit 1
fi

# Vérifie chaque ligne requise dans .htaccess
for line in "${REQUIRED_LINES[@]}"; do
  if ! grep -qF "$line" "$HTACCESS"; then
    echo "try again"
    exit 1
  fi
done

# Vérifie la réponse HTTP
response_code=$(curl -s -o /dev/null -w "%{http_code}" "$URL" -H "$HOST_HEADER")
if [ "$response_code" -ne 200 ]; then
  echo "try again"
  exit 1
fi

page_content=$(curl -s "$URL" -H "$HOST_HEADER")
if ! echo "$page_content" | grep -qF "$EXPECTED_TITLE"; then
  echo "try again"
  exit 1
fi

# Tout est OK → affiche le flag
echo "$FLAG"