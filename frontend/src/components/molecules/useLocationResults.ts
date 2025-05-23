"use client";

import { useQuery } from "@apollo/client";
import { SEARCH_LOCATIONS } from "../../services/queries";
import { LocationSearchResult } from "../../types/location";
import { useLocationStore } from "../../store/locationStore";
import { useEffect } from "react";

export const useLocationResults = () => {
  const { debouncedSearchTerm, setLocations, setLoading, setError } =
    useLocationStore();

  const {
    loading: queryLoading,
    error: queryError,
    data,
  } = useQuery<LocationSearchResult>(SEARCH_LOCATIONS, {
    variables: { name: debouncedSearchTerm },
    skip: !debouncedSearchTerm,
    // Use network-only for initial fetch to support cancellation
    fetchPolicy: "network-only",
    // Use cache for subsequent reads of the same data
    nextFetchPolicy: "cache-first",
  });

  // Update store with query results
  useEffect(() => {
    setLoading(queryLoading);
    setError(queryError || null);
    if (data?.searchLocations) {
      setLocations(data.searchLocations);
    }
  }, [queryLoading, queryError, data, setLoading, setError, setLocations]);

  return {
    loading: queryLoading,
    error: queryError,
    locations: data?.searchLocations || [],
  };
};
