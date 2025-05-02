import { create } from 'zustand';
import { AuthState, LoginCredentials, User } from '../types/auth';
import authService from '../services/authService';

const initialState: AuthState = {
  user: authService.getUser(),
  token: authService.getAuthToken(),
  isAuthenticated: !!authService.getAuthToken(),
  isLoading: false,
  error: null,
};

export const useAuthStore = create<
  AuthState & {
    login: (credentials: LoginCredentials) => Promise<void>;
    logout: () => void;
    clearError: () => void;
  }
>((set) => ({
  ...initialState,
  
  login: async (credentials: LoginCredentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await authService.login(credentials);
      const { token, user } = response;
      
      // Save to local storage
      authService.saveAuthData(token, user);
      
      // Update store
      set({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({
        isLoading: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
      throw error;
    }
  },
  
  logout: () => {
    authService.logout();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },
  
  clearError: () => {
    set({ error: null });
  },
}));