import { create } from "zustand";
import { debounce } from "lodash";
import { Location } from "../types/location";

interface LocationState {
  searchTerm: string;
  debouncedSearchTerm: string;
  locations: Location[];
  loading: boolean;
  error: Error | null;
  setSearchTerm: (term: string) => void;
  setDebouncedSearchTerm: (term: string) => void;
  setLocations: (locations: Location[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error | null) => void;
}

// Create a debounced function outside the store to prevent recreation on each render
const debouncedSetSearch = debounce(
  (set: (state: Partial<LocationState>) => void, term: string) => {
    set({ debouncedSearchTerm: term });
  },
  300
);

export const useLocationStore = create<LocationState>((set) => ({
  searchTerm: "",
  debouncedSearchTerm: "",
  locations: [],
  loading: false,
  error: null,
  setSearchTerm: (term: string) => {
    set({ searchTerm: term });
    if (term.length) {
      debouncedSetSearch(set, term);
    } else {
      set({ debouncedSearchTerm: "" });
    }
  },
  setDebouncedSearchTerm: (term: string) => set({ debouncedSearchTerm: term }),
  setLocations: (locations: Location[]) => set({ locations }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: Error | null) => set({ error }),
}));
