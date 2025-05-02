# Étape de build
FROM node:20-alpine as build

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de configuration
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./

# Installation des dépendances
RUN npm ci

# Copie des sources
#COPY src/ ./src/
#COPY public/ ./public/
#COPY index.html ./
COPY . .
# Build de l'application
RUN npm run build

# Étape de production
FROM nginx:alpine

# Copie de la configuration nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copie des fichiers buildés
COPY --from=build /app/dist /usr/share/nginx/html

# Exposition du port
EXPOSE 80

# Démarrage de nginx
CMD ["nginx", "-g", "daemon off;"]
