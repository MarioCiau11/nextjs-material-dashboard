import { configureStore } from "@reduxjs/toolkit";
import  loginReducer  from "./login/loginReducer";

export default configureStore({
  reducer: {
    login: loginReducer,
    },
     devTools: true,
});
