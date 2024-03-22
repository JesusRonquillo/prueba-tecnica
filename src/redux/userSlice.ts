import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dni: "",
  phone: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const { dni, phone } = action.payload;
      state.dni = dni;
      state.phone = phone;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
