import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./langSlice";
const store = configureStore({
  reducer: {
    language: langReducer,
  },
});

export { store };
