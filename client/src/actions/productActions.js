import axiosUrl from "../config/backendRoute"; // THIS IMPORT IS KEY
import * as constants from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_LIST_REQUEST });

    let data;
    // Logic: Check if we are in Demo/Local mode
    if (process.env.REACT_APP_DATA_SOURCE === 'LOCAL') {
      const res = await fetch("/data/products.json");
      data = await res.json();
    } else {
      const response = await axiosUrl.get("/api/products");
      data = response.data;
    }

    dispatch({ type: constants.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    // ... existing error handling
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: constants.PRODUCT_DETAILS_REQUEST });

    const { data } = await axiosUrl.get(`/api/products/${id}`);

    dispatch({
      type: constants.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};