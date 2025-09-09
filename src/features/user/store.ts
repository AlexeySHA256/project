import { create } from "zustand";
import { User } from "./types";
import { persist } from "zustand/middleware";

type UserState = {
  user: User | null;
  setName: (value: string) => void;
}


export const useUserStore = create<UserState>()(persist((set) => ({
  user: null,
  setName: (value: string) => {
    set((prev) => ({ ...prev, user: { name: value } }))
  },
}), { name: "userStore" }))

export const userStore = () => useUserStore.getState()
