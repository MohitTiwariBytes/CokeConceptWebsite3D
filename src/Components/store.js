import { create } from 'zustand';

export const useModelStore = create((set) => ({
  loadingProgress: 0, // Initialize loading progress to 0
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}));
