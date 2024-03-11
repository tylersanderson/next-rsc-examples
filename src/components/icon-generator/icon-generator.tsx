import { Box } from "@mui/material";
import * as MuiIcons from "react-icons/fa";

export const IconGenerator = () => {
  const iconKeys = Object.keys(MuiIcons);
  const randomIndex = Math.floor(Math.random() * iconKeys.length);
  const RandomIcon = (MuiIcons as { [index: string]: any })[
    iconKeys[randomIndex]
  ];
  return (
    <Box>
      <RandomIcon size="64px" />
    </Box>
  );
};
