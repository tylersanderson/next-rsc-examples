import { Box, Skeleton } from "@mui/material";

export const LoadingSkeleton = (props: any) => {
  return (
    <Box sx={{ backgroundColor: "gray", borderRadius: "8px" }}>
      <Skeleton variant="rectangular" width={240} height={60} />
    </Box>
  );
};
