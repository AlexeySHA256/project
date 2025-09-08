import { create } from "zustand";
import { User } from "./types";
import { persist } from "zustand/middleware";

type UserState = {
  user: User | null;
  setName: (value: string) => void;
  logout: () => void;
}


export const useUserStore = create<UserState>()(persist((set) => ({
  user: null,
  setName: (value: string) => {
    set((prev) => ({ ...prev, user: { name: value } }))
  },
  logout: () => {
    set(state => ({ ...state, user: null }))
    localStorage.removeItem("userStore")
  }
}), { name: "userStore" }))

export const userStore = () => useUserStore.getState()
