#!/bin/bash

# verif chall_2
# Vérifier que l'utilisateur est root
if [ "$EUID" -ne 0 ]; then
  exit 1
fi

DIR="/var/www/manga"
HTACCESS="$DIR/.htaccess"
URL="http://127.0.0.1"
HOST_HEADER="Host: manga.lan"
EXPECTED_TITLE="<title>Manga Auth System</title>"
FLAG="SYS_{htaccess_game}"

echo "checking ..."
sleep 3

# === Vérification du répertoire ===
if [ ! -d "$DIR" ]; then
  echo "try again"
  exit 1
fi

# === Vérification du .htaccess ===
if [ ! -f "$HTACCESS" ]; then
  echo "try again"
  exit 1
fi

# === Vérification des permissions du répertoire ===
current_mode=$(stat -c "%a" "$DIR" 2>/dev/null)
if [ "$current_mode" = "600" ]; then
  echo "try again"
  exit 1
fi

# === Vérification HTTP ===
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

# === Tout est OK → afficher le flag ===
echo "$FLAG"