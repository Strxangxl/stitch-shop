import * as constants from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case constants.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case constants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        // Logic: If payload is an array (local), use it. 
        // If it's an object (backend), extract the 'products' key.
        products: Array.isArray(action.payload)
          ? action.payload
          : (action.payload.products || [])
      };
    case constants.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload, products: [] };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case constants.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case constants.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case constants.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
