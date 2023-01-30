import { useNavigate } from "react-router-dom";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { shades } from "../../theme";

const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="50px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
          fontWeight="bold"
        >
          STITCHSHOP
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
          alignItems="center"
        >
          <Box
            onClick={() => navigate("/login")}
            sx={{ "&:hover": { cursor: "pointer" } }}
            fontWeight="bold"
            color={shades.secondary[300]}
          >
            Login
          </Box>
          <Box
            onClick={() => navigate("/register")}
            sx={{ "&:hover": { cursor: "pointer" } }}
            fontWeight="bold"
            color={shades.secondary[300]}
          >
            Register
          </Box>
          <IconButton
            sx={{
              color: "black",
              display: isMobile ? "block" : "none",
            }}
          >
            <PersonOutline />
          </IconButton>
          <IconButton sx={{ color: "black" }} onClick={() => navigate("/cart")}>
            <ShoppingBagOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
