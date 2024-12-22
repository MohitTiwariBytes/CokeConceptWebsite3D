import { create } from "zustand";

export const useModelStore = create((set) => ({
    loadingProgress: 0,
    setLoadingProgress: (progress) => set({ loadingProgress: progress }),
    isModelLoaded: false,
    setIsModelLoaded: (loaded) => set({ isModelLoaded: loaded }),
}));
