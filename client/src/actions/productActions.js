import axiosUrl from "../config/backendRoute";
import * as constants from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axiosUrl.get("/api/products");
    dispatch({
      type: constants.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: constants.PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axiosUrl.get(`/api/products/${id}`);
    dispatch({
      type: constants.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
