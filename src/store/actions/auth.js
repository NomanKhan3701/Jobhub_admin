import axios from "axios";
import * as actionTypes from "../constants/auth";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import jwt from "jsonwebtoken";
import { safeGet } from "@/shared/utility";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authUnverifiedUser = (user) => {
  return {
    type: actionTypes.AUTH_UNVERIFIED_USER,
    user: user,
  };
};

export const authVerifiedAndRegisteredUser = (user) => {
  return {
    type: actionTypes.AUTH_VERIFIED_AND_REGISTERED,
    user: user,
  };
};

export const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user: user,
  };
};

export const authFail = (error, message) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
    message: message,
  };
};

export const authLogout = () => {
  const cookies = new Cookies();
  localStorage.removeItem("user");
  cookies.remove("token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const logout = (token) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/logout", null, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch(authLogout());
            resolve(res);
          }
        })
        .catch((err) => {
          toast.error(safeGet(err, (e) => e.response.data.message, "Whoops!. Something went wrong"));
          dispatch(authLogout());
          reject();
        });
    });
  };
};

export const auth = (email, password, signIn, byGoogle = false) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(authStart());
      let authData = email;
      let url = `${process.env.NEXT_PUBLIC_API_URL}/register`;
      const cookies = new Cookies();

      if (signIn) {
        authData = {};
        authData.email = email;
        authData.password = password;
        authData.byGoogle = byGoogle;
        url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
      }
      axios
        .post(url, authData)
        .then((res) => {
          if (!res.data.error && res.status === 200) {
            let decoded_jwt = jwt.decode(res.data.access_token);
            let expiryTime = decoded_jwt.exp - decoded_jwt.iat;
            localStorage.setItem("user", JSON.stringify(res.data.user));
            cookies.set("token", res.data.access_token, { expires: new Date(new Date().getTime() + expiryTime * 1000) });
            dispatch(authSuccess(res.data.access_token, res.data.user));
          }
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          if (err.response && err.response.data) {
            dispatch(
              authFail(err.response.data.error, err.response.data.message)
            );
            if (
              !err.response.data.isVerified &&
              !err.response.data.isFirstTime
            ) {
              let userDetail = err.response.data.user;
              dispatch(setRedirectPathHomeAsUserNotVerified(true));
              dispatch(authUnverifiedUser(userDetail));
            } else if (err.response.data.isVerified) {
              let userDetail = err.response.data.user;
              dispatch(authVerifiedAndRegisteredUser(userDetail));
            }
            reject(err);
          } else reject(err);
        });
    });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    if (!token) {
      dispatch(authLogout());
    } else {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        if (!user.isVerified) {
          dispatch(setRedirectPathHomeAsUserNotVerified(true));
        }
        dispatch(authSuccess(token, user));
      }
    }
  };
};

export const setRedirectPathHomeAsUserNotVerified = (value) => {
  return {
    type: actionTypes.SET_REDIRECT_PATH_HOME_USER_NOT_VERIFIED,
    value: value,
  };
};

export const setUser = (data) => {
  return {
    type: actionTypes.SET_USER,
    data: data,
  };
}