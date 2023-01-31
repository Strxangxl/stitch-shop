import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShoppingList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const axiosUrl = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axiosUrl.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, [axiosUrl]);

  return (
    <Box width="80%" margin="60px auto">
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
