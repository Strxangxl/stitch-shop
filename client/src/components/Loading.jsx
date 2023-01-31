import { CircularProgress } from "@mui/material";
import { shades } from "../theme";

const Loading = () => {
  return <CircularProgress color={shades.secondary[400]} />;
};

export default Loading;
