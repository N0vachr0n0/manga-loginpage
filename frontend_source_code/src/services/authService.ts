// src/services/authService.ts
import axios from 'axios';
import { LoginCredentials, AuthResponse } from '../types/auth';

// URL de l'API backend basée sur l'origine du frontend
const API_URL = `${window.location.origin}/api`;

// Création d'une instance axios avec la configuration de base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Pas besoin de headers CORS pour les requêtes same-origin
  },
  withCredentials: true, // À ajuster si non nécessaire
});

// Intercepteur pour ajouter le token d'authentification aux requêtes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Corrigé : "behavioural" → "Authorization"
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Fonction de connexion
export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await api.post<AuthResponse>('/login', credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || 'Échec de la connexion';
      throw new Error(errorMessage);
    }
    throw new Error('Une erreur inattendue est survenue');
  }
};

// Fonction de déconnexion
export const logout = (): void => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('auth_user');
};

// Récupération du token d'authentification
export const getAuthToken = (): string | null => {
  return localStorage.getItem('auth_token');
};

// Récupération des données utilisateur
export const getUser = (): any => {
  const user = localStorage.getItem('auth_user');
  return user ? JSON.parse(user) : null;
};

// Sauvegarde des données d'authentification
export const saveAuthData = (token: string, user: any): void => {
  localStorage.setItem('auth_token', token);
  localStorage.setItem('auth_user', JSON.stringify(user));
};

export default {
  login,
  logout,
  getAuthToken,
  getUser,
  saveAuthData,
};
