import { create } from "zustand";

type AuthStoreState = {
  isAuthInitialized: boolean;
  isLoggedIn: boolean;
  initializeAuth: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  logIn: () => void;
  logOut: () => void;
  currentUserId: string | null;
  setCurrentUserId: (id: string | null) => void;
};

export const useAuthStore = create<AuthStoreState>((set) => ({
  isAuthInitialized: false,
  initializeAuth: () => set({ isAuthInitialized: true }),
  isLoggedIn: false,
  logIn: () => set({ isLoggedIn: true }),
  logOut: () => set({ isLoggedIn: false }),
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  currentUserId: null,
  setCurrentUserId: (id: string | null) => set({ currentUserId: id }),
}));
