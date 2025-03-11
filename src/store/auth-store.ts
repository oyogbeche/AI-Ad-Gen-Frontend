import { create } from "zustand";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar_url: string;
  token: string;
}
interface Token {
  token: string;
}

interface AuthStore {
  user: User | null;
  token: Token | null;
  setUser: (user: User) => void;
  setToken: (token: Token) => void;
  logout: () => void;

}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null, token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ token: null }),
}));
