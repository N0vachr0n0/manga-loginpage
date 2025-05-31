#!/bin/bash

# verif chall 6
# Vérifier que l'utilisateur est root
if [ "$EUID" -ne 0 ]; then
  echo "try again"
  exit 1
fi

FLAG="SYS_{selinux_and_api_ok}"
URL="http://127.0.0.1/api"
HOST_HEADER="Host: manga.lan"
EXPECTED_BODY="Ah tchaiiiiiss !"

echo "checking ..."
sleep 3

# === Vérifier si httpd_can_network_connect est à "on" ===
sestatus=$(getsebool httpd_can_network_connect 2>/dev/null | grep -o ':\ .*' | cut -d' ' -f2)

if [ "$sestatus" != "on" ]; then
  echo "try again"
  exit 1
fi

# === Vérifier la réponse de l'API ===
response=$(curl -s -H "$HOST_HEADER" -w "\n%{http_code}" "$URL")

# Extraire le corps et le code HTTP
body=$(echo "$response" | sed '$d')
status_code=$(echo "$response" | tail -n1)

if [ "$status_code" -ne 404 ]; then
  echo "try again"
  exit 1
fi

if [ "$body" != "$EXPECTED_BODY" ]; then
  echo "try again"
  exit 1
fi

# === Tout est OK → afficher le flag ===
echo "$FLAG"