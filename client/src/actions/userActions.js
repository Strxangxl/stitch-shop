import axiosUrl from "../config/backendRoute";
import * as constants from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    
    const { data } = await axiosUrl.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: constants.USER_REGISTER_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: constants.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": 'application/json',
      },
    };
    
    const { data } = await axiosUrl.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error)
    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: constants.USER_LOGOUT })
}