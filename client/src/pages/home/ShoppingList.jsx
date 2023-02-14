import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../components";
import { listProducts } from "../../actions/productActions";

const ShoppingList = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Box width="80%" margin="60px auto">
      <Typography
        variant="h2"
        sx={{ display: "flex", alignItems: "center" }}
      >
        Our Latest Collections
      </Typography>
      <Grid
        pt="40px"
        container
        spacing={{ xs: 3, md: 5 }}
        columns={{ xs: 4, sm: 12, md: 18 }}
      >
        {products?.map((product) => (
          <Grid item xs={6} key={product._id}>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShoppingList;
