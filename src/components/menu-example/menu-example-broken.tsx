/* eslint-disable react/jsx-no-undef */

import { useState } from "react";
import { LoadingSkeleton as DrawerMenuServerComponent } from "../loading-skeleton/loading-skeleton";

const HeaderServerComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={toggleOpen}>Open Menu</button>
      <DrawerMenuServerComponent />
    </>
  );
};

export { HeaderServerComponent };
