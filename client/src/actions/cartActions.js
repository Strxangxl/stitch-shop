import * as constants from "../constants/cartConstants";
import axiosUrl from "../config/backendRoute";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axiosUrl.get(`/api/products/${id}`);

  dispatch({
    type: constants.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: constants.CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
