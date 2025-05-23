"use client";

interface LocationHeaderProps {
  name: string;
  latitude: number;
  longitude: number;
}

export const LocationHeader = ({
  name,
  latitude,
  longitude,
}: LocationHeaderProps) => {
  return (
    <div className="location-details">
      <h1>{name}</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
};
