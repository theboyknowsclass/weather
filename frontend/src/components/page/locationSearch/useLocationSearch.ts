"use client";

import { useLocationStore } from "../../../store/locationStore";

export const useLocationSearch = () => {
  const { searchTerm, setSearchTerm, loading, error, locations } =
    useLocationStore();

  return {
    searchTerm,
    setSearchTerm,
    loading,
    error,
    locations,
  };
};
