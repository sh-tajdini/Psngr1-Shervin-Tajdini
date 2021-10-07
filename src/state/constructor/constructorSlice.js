import { createSlice } from "@reduxjs/toolkit";

import { fetchConstructorStandings } from "./thunks";

export const constructorSlice = createSlice({
  name: "constructors",
  initialState: {
    constructors: [],
    consloading: false,
    error: "",
    testData: "",
  },

  reducers: {
    setTestData: (state, action) => {
      state.testData = action.payload;
    },
  },
  extraReducers: {
    [fetchConstructorStandings.pending]: (state, action) => {
      state.error = "";
      state.consloading = true;
      state.constructors = [];
    },
    [fetchConstructorStandings.fulfilled]: (state, action) => {
      state.consloading = false;
      state.error = "";
      state.constructors = action.payload;
    },
    [fetchConstructorStandings.rejected]: (state, action) => {
      state.consloading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTestData } = constructorSlice.actions;

export default constructorSlice;
