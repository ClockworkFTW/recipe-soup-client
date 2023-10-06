import { create } from "zustand";
import jwtDecode from "jwt-decode";

const useAuthStore = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
}));

export function useToken() {
  return useAuthStore((state) => state);
}

export function useUser() {
  return useAuthStore((state) => state.token && jwtDecode(state.token));
}

export default useAuthStore;
