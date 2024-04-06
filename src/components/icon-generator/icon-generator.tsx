"use client";

import { Box } from "@mui/material";
import * as MuiIcons from "react-icons/fa";
import { getHashCode } from "./lib";

type IconGeneratorProps = {
  name: string;
};

export const IconGenerator = (props: IconGeneratorProps) => {
  const { name } = props;
  const iconKeys = Object.keys(MuiIcons);
  const nameIndex = Math.abs(getHashCode(name) % iconKeys.length);
  const NameIcon = (MuiIcons as { [index: string]: any })[iconKeys[nameIndex]];
  return (
    <Box>
      <NameIcon size="64px" />
    </Box>
  );
};
