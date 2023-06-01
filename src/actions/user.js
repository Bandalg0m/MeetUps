// import axios from "axios";
import { setUser } from "../reducers/userReducer";
import myAxios from "../Utils/myAxios";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await myAxios.post(
        "https://api.fit-meetups.ru/auth/login",
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response);
    } catch (e) {
      alert("Неверная пара login / password");
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem("token")) {
        dispatch(setUser({ isAuth: true }));
      }
    } catch (e) {
      localStorage.removeItem("token");
    }
  };
};

// axios.get('https://api.fit-meetups.ru/auth/login', {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
