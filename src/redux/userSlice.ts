import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dni: "",
  phone: "",
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      const { dni, phone, name } = action.payload;
      state.dni = dni;
      state.phone = phone;
      state.name = name;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
