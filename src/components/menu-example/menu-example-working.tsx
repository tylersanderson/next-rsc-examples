/* eslint-disable react/jsx-no-undef */
import { LoadingSkeleton as DrawerMenuServerComponent } from "../loading-skeleton/loading-skeleton";

const HeaderServerComponent = () => {
  return (
    <DrawerMenuServerComponent>
      <button>Open Menu</button>
    </DrawerMenuServerComponent>
  );
};

export { HeaderServerComponent };
