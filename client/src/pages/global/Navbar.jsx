import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import { shades } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    navigate('/profile')
  };

  const logoutHandler = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="50px"
      backgroundColor="rgba(255, 255, 255, 0.9)"
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
          {/* here */}
          {userInfo ? (
            <>
              <Button 
              onClick={handleClick}
              sx={{
                color: shades.secondary[600],
                fontSize: ".8rem",
                textTransform: "capitalize",
                fontWeight: 600
              }}
              >{userInfo.name}</Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                close={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Box
                onClick={() => navigate("/login")}
                sx={{ "&:hover": { cursor: "pointer" } }}
                fontWeight="bold"
                color={shades.primary[500]}
              >
                Login
              </Box>
              <Box
                onClick={() => navigate("/register")}
                sx={{ "&:hover": { cursor: "pointer" } }}
                fontWeight="bold"
                color={shades.primary[500]}
              >
                Register
              </Box>
            </>
          )}

          <IconButton
            sx={{
              color: "black",
              display: isMobile ? "block" : "none",
            }}
            onClick={logoutHandler}
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
