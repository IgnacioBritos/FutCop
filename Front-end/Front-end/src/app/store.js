import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import ReservationReducer from "./Reservations";
export const store = configureStore({
  reducer: {
    user: userReducer,
    reservation :ReservationReducer,
  },
});
