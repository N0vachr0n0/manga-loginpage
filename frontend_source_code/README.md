# Manga Auth System

## Description
Système d'authentification avec une interface inspirée du style manga, développé avec React, TypeScript et Tailwind CSS.

## Fonctionnalités
- Authentification utilisateur (login/logout)
- Interface utilisateur manga stylisée
- Gestion des routes protégées
- Gestion des états avec Zustand
- Notifications avec React Hot Toast

## Technologies Utilisées
- React 18
- TypeScript
- Tailwind CSS
- Zustand (gestion d'état)
- React Router DOM (routage)
- Axios (requêtes HTTP)
- React Hot Toast (notifications)
- Lucide React (icônes)

## Structure du Projet
```
src/
├── components/         # Composants React
│   ├── auth/          # Composants d'authentification
│   └── ui/            # Composants d'interface utilisateur
├── context/           # Contextes React
├── pages/             # Pages de l'application
├── services/          # Services (API, auth)
├── store/             # Stores Zustand
├── types/             # Types TypeScript
└── main.tsx           # Point d'entrée
```

## Routes
- `/login` - Page de connexion
- `/dashboard` - Dashboard (route protégée)
- `/` - Redirection vers login

## Configuration
Pour modifier les routes ou ajouter de nouvelles fonctionnalités :

1. Routes : Modifier `src/App.tsx`
```typescript
<Routes>
  <Route path="/nouvelle-route" element={<NouvelleComponent />} />
</Routes>
```

2. API : Modifier `src/services/authService.ts`
```typescript
const API_URL = 'votre-nouvelle-url-api';
```

## Installation
```bash
# Installation des dépendances
npm install

# Démarrage en développement
npm run dev

# Build pour production
npm run build
```

## Variables d'Environnement
Créez un fichier `.env` à la racine du projet :
```
VITE_API_URL=votre-url-api
```

## Contribution
1. Fork le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Créez une Pull Request