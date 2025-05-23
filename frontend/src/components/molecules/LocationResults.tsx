"use client";

import { LocationItem } from "./LocationItem";
import { useLocationResults } from "./useLocationResults";

export const LocationResults = () => {
  const { locations } = useLocationResults();

  if (locations.length === 0) {
    return null;
  }

  return (
    <div className="results-container">
      {locations.map((location) => (
        <LocationItem
          key={`${location.name}-${location.latitude}-${location.longitude}`}
          location={location}
        />
      ))}
    </div>
  );
};
