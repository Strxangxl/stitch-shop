import { useState } from "react";
import {
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

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
      <Card onClick={() => navigate(`/product/${product._id}`)}>
        <IconButton
          size="small"
          sx={{
            display: isHovered ? "block" : "none",
            position: "absolute",
            top: "5%",
            right: "5%",
            opacity: ".5",
            backgroundColor: shades.primary[300],
            color: shades.primary[100],
            "&:hover": { color: shades.secondary[400], opacity: ".9" },
          }}
        >
          <StarOutlinedIcon />
        </IconButton>
        <CardMedia
          component="img"
          alt={product.name}
          width="300px"
          height="400px"
          image={product.image}
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
              sx={{
                backgroundColor: shades.secondary[300],
                color: "white",
                "&:hover": { backgroundColor: shades.primary[300] },
              }}
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
