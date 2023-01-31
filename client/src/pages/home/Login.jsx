import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { shades } from "../../theme";
import { LockOutlined } from "@mui/icons-material";
import Message from "../../components/Message";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = navigate.search ? navigate.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };
  console.log(error)

  return (
    <Container component="main" maxWidth="xs">
      {/* {loading && <Loading />} */}
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{
            color: shades.primary[600],
            backgroundColor: shades.secondary[300],
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ pt: 1 }}>
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          display="flex"
          flexDirection="column"
          width="100%"
          gap="20px"
        >
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Message variant="error">{error}</Message>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              fontSize: ".8rem",
              mt: 3,
              mb: 2,
              color: shades.primary[600],
              backgroundColor: shades.secondary[300],
              ":hover": { color: shades.secondary[300] },
            }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Box
                color={shades.secondary[400]}
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/register")}
              >
                Don`t have an account? Sign Up
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
