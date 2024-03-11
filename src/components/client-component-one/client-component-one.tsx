"use client";

import { Button } from "@mui/material";
import { ClientComponentTwo } from "../client-component-two/client-component-two";

export const ClientComponentOne = () => {
  const handleClick = () => {
    console.log("Client component one button clicked");
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Client Component One
      </Button>
      <ClientComponentTwo />
    </>
  );
};
