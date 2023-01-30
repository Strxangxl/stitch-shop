import { useNavigate } from "react-router-dom";
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

const Register = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    console.log({
        email: data.get('email'),
        password: data.get('password')
    })
  }

  return (
    <Container component="main" maxWidth="xs">
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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Box color={shades.secondary[400]}
                sx={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/login")}
              >
                Already have an account? Sign In
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
