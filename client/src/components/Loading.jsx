import { Box, CircularProgress } from "@mui/material";
import { shades } from "../theme";

const Loading = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      // zIndex={1}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;
