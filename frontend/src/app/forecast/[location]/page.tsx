"use client";

import { useParams, useSearchParams } from "next/navigation";
import { PageWithBackButton } from "../../../components/templates/PageWithBackButton";
import { Forecast } from "../../../components/page/forecast/Forecast";

export const ForecastPage: React.FC = () => {
  const params = useParams<{ location: string }>();
  const searchParams = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lon = parseFloat(searchParams.get("lon") || "0");
  const locationName = decodeURIComponent(params.location);

  return (
    <PageWithBackButton title={locationName}>
      <Forecast latitude={lat} longitude={lon} />
    </PageWithBackButton>
  );
};

export default ForecastPage;
