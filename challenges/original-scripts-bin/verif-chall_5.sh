#!/bin/bash

# verif chall 5
# Vérifier que l'utilisateur est root
if [ "$EUID" -ne 0 ]; then
  echo "try again"
  exit 1
fi

FLAG="SYS_{docker_backend_ok}"
URL="http://127.0.0.1:5000"
EXPECTED_BODY="Ah tchaiiiiiss !"

echo "checking ..."
sleep 3

# === Vérifier si le conteneur manga-backend est en cours d'exécution ===
container_status=$(docker ps -f "name=manga-backend" --format "{{.Status}}" 2>/dev/null)

if [ -z "$container_status" ]; then
  echo "try again"
  exit 1
fi

# === Vérifier la réponse de l'API ===
response=$(curl -s -w "\n%{http_code}" "$URL")

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