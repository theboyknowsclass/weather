import { MainLayout } from "../components/templates/MainLayout";
import { LocationSearch } from "../components/page/locationSearch/LocationSearch";

export default function Home() {
  return (
    <MainLayout>
      <LocationSearch />
    </MainLayout>
  );
}
