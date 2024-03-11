"use client";

import { Button } from "@mui/material";

export const ClientComponentTwo = () => {
  const handleClick = () => {
    console.log("Client component two button clicked");
  };

  return (
    <Button variant="contained" onClick={handleClick}>
      Client Component Two
    </Button>
  );
};
