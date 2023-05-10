import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};
const UPDATA_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);
const AuthRed = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthUpdataContext = createContext(UPDATA_STATE);
const AuthUpdata = (state, action) => {
  switch (action.type) {
    case "UPDATA_START":
      return {
        userUpdata: null,
        loading: true,
        error: null,
      };
    case "UPDATA_SUCCESS":
      return {
        userUpdata: action.payload,
        loading: false,
        error: null,
      };
    case "UPDATA_FAILURE":
      return {
        userUpdata: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};




export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthRed, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
