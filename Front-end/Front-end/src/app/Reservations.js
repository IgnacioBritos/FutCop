import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allReservations = createAsyncThunk(
  "reservations/allReservations",
  async () => {
    try {
      const response = await axios.get("http://localhost:4000/reservations");
      return response.data;
    } catch (error) {
      return error.response ? error.response.data : error.message;
    }
  }
);
export const userReservations = createAsyncThunk(
  "reservations/UserReservations",
  async (id, { rejectWithValue }) => {
    try {
      // Realizar la solicitud al backend enviando el id como parámetro
      const response = await axios.get(`http://localhost:4000/reservations/user/${id}`);
      return response.data;
    } catch (error) {
      // Manejo de errores en caso de que falle la solicitud
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);


const initialState = {
  allReservations: null,
  myReservations: null,
  UserReservations:null,
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducers para obtener todas las reservas
      .addCase(allReservations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allReservations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allReservations = action.payload;
      })
      .addCase(allReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Reducers para obtener las reservas de un usuario específico
      .addCase(userReservations.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userReservations.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.UserReservations = action.payload; // Guardas las reservas específicas en el estado
      })
      .addCase(userReservations.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Exporta el reducer para conectarlo en el store
export default reservationsSlice.reducer;
