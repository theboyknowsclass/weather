"use client";

import { Location } from "../../types/location";
import { useRouter } from "next/navigation";

interface LocationItemProps {
  location: Location;
}

export const LocationItem = ({ location }: LocationItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `/forecast/${location.name}?lat=${location.latitude}&lon=${location.longitude}`
    );
  };

  return (
    <div className="location-item" onClick={handleClick}>
      <div className="location-name">{location.name}</div>
      <div className="admin1">{location.admin1 || "-"}</div>
      <div className="country">{location.country || "-"}</div>
      <div className="country-code">{location.country_code || "-"}</div>
    </div>
  );
};
