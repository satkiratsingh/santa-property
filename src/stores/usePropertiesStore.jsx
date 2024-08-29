import { create } from "zustand";
import {
  getProperties,
  getPropertyByLimit,
  searchPropertyByNameOrLocation,
} from "../utils/sanity";

export const usePropertiesStore = create((set) => ({
  propertiesListing: [],
  homePageListings: [],
  isLoading: true,
  setProperties: async () => {
    set({ isLoading: true });
    try {
      const propertiesListings = await getProperties();
      set({ propertiesListings });
    } catch (error) {
      console.log(error);
      set({ propertiesListings: [] });
    } finally {
      set({ isLoading: false });
    }
  },
  setHomePageListings: async () => {
    set({ isLoading: true });
    try {
      const homePageListings = await getPropertyByLimit(4);
      set({ homePageListings });
    } catch (error) {
      console.log(error);
      set({ homePageListings: [] });
    } finally {
      set({ isLoading: false });
    }
  },
  setPropertiesByLimit: async (limit) => {
    set({ isLoading: true });
    try {
      const propertiesListings = await getPropertyByLimit(limit);
      set({ propertiesListings });
    } catch (error) {
      console.log(error);
      set({ propertiesListings: [] });
    } finally {
      set({ isLoading: false });
    }
  },
  setPropertiesBySearch: async (searchQuery) => {
    if (searchQuery?.length > 0) {
      set({ isLoading: true });
      try {
        const propertiesListings = await searchPropertyByNameOrLocation(
          searchQuery
        );
        set({ propertiesListings });
      } catch (error) {
        console.log(error);
        set({ propertiesListings: [] });
      } finally {
        set({ isLoading: false });
      }
    }
  },
}));
