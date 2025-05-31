#!/bin/bash

# verif chall 4
# Vérifier que l'utilisateur est root
if [ "$EUID" -ne 0 ]; then
  echo "try again"
  exit 1
fi

URL="http://127.0.0.1"
HOST_HEADER="Host: manga.lan"
EXPECTED_TITLE="<title>Manga Auth System</title>"
FLAG="SYS_{firewall_and_web_ok}"

echo "checking ..."
sleep 3

# === Vérifie si le service HTTP OU le port 80/tcp est autorisé ===
is_http_service_allowed=$(firewall-cmd --list-all | grep -i services | grep -q '\bhttp\b' && echo "yes" || echo "no")
is_80_tcp_allowed=$(firewall-cmd --list-ports | grep -q '80/tcp' && echo "yes" || echo "no")

if [ "$is_http_service_allowed" != "yes" ] && [ "$is_80_tcp_allowed" != "yes" ]; then
  echo "try again"
  exit 1
fi

# === Vérifie la réponse HTTP ===
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