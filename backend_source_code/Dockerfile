# Utiliser une image Python officielle comme base
FROM python:3.9-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier requirements.txt (si nécessaire)
# Vous pouvez créer un fichier requirements.txt contenant toutes vos dépendances comme Flask
COPY requirements.txt requirements.txt

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste de l'application
COPY . .

# Exposer le port sur lequel Flask s'exécute
EXPOSE 5000

# Commande par défaut pour démarrer l'application
CMD ["python", "app.py"]

