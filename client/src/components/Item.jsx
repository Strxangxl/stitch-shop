import { useState } from "react";
import { Typography, Button, Box, Card, CardMedia } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const addToCart = () => {
    console.log("Added");
  };

  return (
    <Box
      position="relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <Card>
        <CardMedia
          component="img"
          alt={product.name}
          width="300px"
          height="400px"
          image={product.image}
          onClick={() => navigate(`/product/${product._id}`)}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Button
              onClick={addToCart}
              sx={{ backgroundColor: shades.secondary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom="20%"
          left="0"
          width="100%"
          padding="0 5%"
          sx={{ color: "white" }}
        >
          <Typography variant="h4" color={shades.neutral[100]} fontWeight="bold">{product.name}</Typography>
          <Typography fontWeight="bold" variant="h4">${product.price}</Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Item;