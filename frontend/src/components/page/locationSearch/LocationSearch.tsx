"use client";

import { SearchInput } from "../../atoms/SearchInput";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import { LocationResults } from "../../molecules/LocationResults";
import { useLocationSearch } from "./useLocationSearch";

export const LocationSearch = () => {
  const { searchTerm, setSearchTerm, loading, error, locations } =
    useLocationSearch();

  return (
    <div className="location-search">
      <SearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for a city..."
      />

      {loading && <LoadingSpinner />}

      {error && <div className="error-message">Error: {error.message}</div>}

      <LocationResults />

      {searchTerm && locations.length === 0 && (
        <div className="no-results">No locations found</div>
      )}
    </div>
  );
};
