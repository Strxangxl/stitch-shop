import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

const axiosUrl = axios.create({
  baseURL: "http://localhost:5000",
});

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axiosUrl.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
