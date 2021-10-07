import { createSlice } from "@reduxjs/toolkit";

import { fetchDriverInformation } from "./thunks";

export const driverSlice = createSlice({
  name: "driver",
  initialState: {
    driverInfo: [],
    loading: false,
    error: "",
    testData: "",
  },

  reducers: {
    setTestData: (state, action) => {
      state.testData = action.payload;
    },
  },
  extraReducers: {
    [fetchDriverInformation.pending]: (state, action) => {
      state.error = "";
      state.loading = true;
      state.driverInfo = [];
    },
    [fetchDriverInformation.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.driverInfo = action.payload;
    },
    [fetchDriverInformation.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTestData } = driverSlice.actions;

export default driverSlice;
