import { configureStore } from "@reduxjs/toolkit";
import AppStore from "./sliceses/appSlice"

const store = configureStore({
  reducer: {
    app: AppStore,
  },
});

export default store;
