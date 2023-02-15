import { Typography, Box, Card, CardMedia } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Box position="relative">
      <Card onClick={() => navigate(`/product/${product._id}`)}>
        <CardMedia
          component="img"
          alt={product.name}
          width="300px"
          height="400px"
          image={product.image}
          sx={{
            overflow: "hidden",
            transition: "transform .5s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
        />
        <Box
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
          sx={{ color: "white" }}
        >
          <Typography
            variant="h4"
            color={shades.neutral[100]}
            fontWeight="bold"
          >
            {product.name}
          </Typography>
          <Typography fontWeight="bold" variant="h4">
            ${product.price}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Item;
