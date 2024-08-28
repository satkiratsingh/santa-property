import { create } from "zustand";

export const useSearchStore = create((set) => ({
  query: "",
  propertyType: "",
  priceRange: "",
  setQuery: (query) => set({ query }),
  setPropertyType: (propertyType) => set({ propertyType }),
  setPriceRange: (priceRange) => set({ priceRange }),
}));
