import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dni: "",
  phone: "",
  name: "",
  selectedPlan: {
    name: "",
    price: 0,
    description: ["", "", ""],
    age: 0,
  },
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
    addSelectedPlan: (state, action) => {
      const { name, price, description, age } = action.payload;
      state.selectedPlan.name = name;
      state.selectedPlan.price = price;
      state.selectedPlan.description = description;
      state.selectedPlan.age = age;
    },
  },
});

export const { addUser, addSelectedPlan } = userSlice.actions;
export default userSlice.reducer;
