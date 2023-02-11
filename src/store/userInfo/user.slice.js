import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    userId: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userId = action.payload;
    },
  },
});
