import { createSlice } from "@reduxjs/toolkit";

import { fetchDriverStandings } from "./thunks";

export const standingsSlice = createSlice({
  name: "standings",
  initialState: {
    drivers: [],
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
    [fetchDriverStandings.pending]: (state, action) => {
      state.error = "";
      state.loading = true;
      state.drivers = [];
    },
    [fetchDriverStandings.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.drivers = action.payload;
    },
    [fetchDriverStandings.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTestData } = standingsSlice.actions;

export default standingsSlice;
