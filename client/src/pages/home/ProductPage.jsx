import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { shades } from "../../theme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { listProductsDetails } from "../../actions/productActions";

const ProductPage = () => {
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const isMobile = useMediaQuery("(min-width: 600px)");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch, id]);

  const addToCart = () => {
    navigate(`/cart/${id}?qty=${count}`)
  };

  return (
    <Box width="80%" margin="60px auto">
      <Button
        onClick={() => navigate(`/`)}
        sx={{
          display: "flex",
          gap: 1,
          color: shades.primary[400],
          fontWeight: "bold",
        }}
      >
        <ArrowBackIcon />
        Go Back
      </Button>
      <Box
        key={product._id}
        display="flex"
        flexWrap={isMobile ? "nowrap" : "wrap"}
        columnGap="40px"
      >
        <Box flex="1 1 40%" pt="20px">
          <img
            alt={product.name}
            width="100%"
            height="100%"
            src={product.image}
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box flex="1 1 60%" pt="20px">
          <Box m={isMobile ? "65px 0 25px 0" : "20px 0 25px 0"}>
            <Typography variant="h2" color={shades.secondary[600]}>
              {product.name}
            </Typography>
            <Typography variant="h3" pt="10px">
              $ {product.price}
            </Typography>
            <Typography variant="subtitle1" pt="12px" pb="20px">
              {product.description}
            </Typography>

            <Box display="flex" alignItems="center" min-height="50px">
              <Typography
                variant="subtitle 2"
                pr="20px"
                color={shades.primary[300]}
              >
                {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Typography>

              {product.countInStock > 0 ? (
                <Box
                  display="flex"
                  alignItems="center"
                  border={`1.5px solid ${shades.neutral[300]}`}
                  mr="20px"
                  p="2px 5px"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                >
                  <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                    <RemoveIcon />
                  </IconButton>
                  <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                  <IconButton onClick={() => setCount(count + 1)}>
                    <AddIcon />
                  </IconButton>
                </Box>
              ) : (
                ""
              )}
            </Box>

            <Button
              onClick={addToCart}
              disabled={product.countInStock === 0}
              sx={{
                mt: "30px",
                backgroundColor: shades.secondary[300],
                color: "white",
                fontSize: isMobile ? ".9rem" : ".6rem",
                "&:hover": { backgroundColor: shades.primary[300] },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
