import { configureStore } from "@reduxjs/toolkit";

import { constructorSlice } from "./constructor/constructorSlice";

import { standingsSlice } from "./standings/standingsSlice";

import { driverSlice } from "./drivers/driverSlice";

export default configureStore({
  reducer: {
    standingsSlice: standingsSlice.reducer,
    constructorSlice: constructorSlice.reducer,
    driverSlice: driverSlice.reducer,
  },
});
