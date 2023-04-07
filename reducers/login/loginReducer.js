import { createSlice } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
  userInformacion: {
    isLogginIn: false,
  },
};

// Actual Slice
export const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.userInformacion = action.payload;
    },

    // // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.auth,
    //     };
    //   },
    // },
  },
});

export const { setAuthState } = loginReducer.actions;
export default loginReducer.reducer;
