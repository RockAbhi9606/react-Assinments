import { configureStore } from "@reduxjs/toolkit";
import AppStore from "./sliceses/appSlice"
import searchSlice from "./sliceses/searchSlice";
import chatSlice from "./sliceses/chatSlice";

const store = configureStore({
  reducer: {
    app: AppStore,
    search: searchSlice,
    chat: chatSlice
  },
});

export default store;
