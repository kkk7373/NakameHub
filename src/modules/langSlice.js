import { createSlice } from "@reduxjs/toolkit";
const langSlice = createSlice({
  name: "language",
  initialState: {
    value: "Eng",
  },
  reducers: {
    toggleLanguage: (state) => {
      state.value = state.value === "Eng" ? "Jap" : "Eng";
    },
  },
});
export const { toggleLanguage } = langSlice.actions;
export default langSlice.reducer;
