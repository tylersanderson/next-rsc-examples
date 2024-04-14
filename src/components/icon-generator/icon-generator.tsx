"use client";

import { Box } from "@mui/material";
import * as FaIcons from "react-icons/fa";
import { getHashCode } from "./lib";

type IconGeneratorProps = {
  slug: string;
};

export const IconGenerator = (props: IconGeneratorProps) => {
  const { slug } = props;
  const iconKeys = Object.keys(FaIcons);
  const slugIndex = Math.abs(getHashCode(slug) % iconKeys.length);
  const SlugIcon = (FaIcons as { [index: string]: any })[iconKeys[slugIndex]];
  return (
    <Box>
      <SlugIcon size="64px" />
    </Box>
  );
};
