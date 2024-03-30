import { Box } from "@mui/material";
import styles from "./loading-skeleton.module.css";

export const LoadingSkeleton = (props: any) => {
  return (
    <Box
      className={styles.loading}
      height={60}
      width={240}
      sx={{ backgroundColor: "gray", borderRadius: "8px" }}
    ></Box>
  );
};
