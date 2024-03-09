/* eslint-disable react/jsx-no-undef */
import { LoadingSkeleton as DrawerClientCompoennt } from "../loading-skeleton/loading-skeleton";

const DrawerMenuServerComponent = async () => {
  const data = await fetch("https://api.example.com/data");

  return <DrawerClientCompoennt data={data} />;
};

export { DrawerMenuServerComponent };
