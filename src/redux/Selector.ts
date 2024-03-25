import { RootState } from "../types/style-interfaces";

// Selector para obtener el nombre del usuario
export const selectUserName = (state: RootState) => state.user.name;

// Selector para obtener los datos del usuario
export const selectUserData = (state: RootState) => state.user.userData;

// Selector para obtener el plan seleccionado
export const selectSelectedPlan = (state: RootState) => state.user.selectedPlan;
