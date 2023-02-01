import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { shades } from "../../theme";
import { addToCart } from "../../actions/cartActions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const { id } = useParams();
  const productId = id;

  let location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <Box width="80%" margin="100px auto">
      <Typography variant="h2">Your Cart</Typography>
      <Box width="100%" height="100%" display="flex">
        {cartItems.length === 0 ? (
          <Typography variant="h3" pt="20px">
            No item in the cart.
          </Typography>
        ) : (
          <Box display="flex" flexDirection="column">
            {cartItems?.map((item) => (
              <Box
                key={item.product}
                display="flex"
                alignItems="center"
                gap={10}
                flexWrap="wrap"
              >
                <Box>
                  <img alt={item.name} src={item.image} width="150px" />
                </Box>
                <Box display="flex" alignItems="center" gap={10}>
                  <Typography>{item.name}</Typography>
                  <Box
                    display="flex"
                    alignItems="center"
                    border={`1.5px solid ${shades.neutral[300]}`}
                    mr="20px"
                    p="2px 5px"
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  >
                    <IconButton
                      onClick={() => setCount(Math.max(count - 1, 1))}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                    <IconButton onClick={() => setCount(count + 1)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
