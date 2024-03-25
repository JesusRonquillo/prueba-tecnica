import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  userData: {
    phone: "",
    dni: "",
  },
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
      const { name } = action.payload;
      state.name = name;
    },
    addUserData: (state, action) => {
      const { dni, phone } = action.payload;
      state.userData.dni = dni;
      state.userData.phone = phone;
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

export const { addUser, addUserData, addSelectedPlan } = userSlice.actions;
export default userSlice.reducer;
