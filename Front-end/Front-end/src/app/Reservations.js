import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const allReservations = createAsyncThunk(
  "reservations/allReservations",
  async () =>{
try {
    const response = await axios.get("http://localhost:4000/reservations")
    return response.data
    
} catch (error) {
    
    return error.response ? error.response.data : error.message
      
}
  }
);


const initialState = {
  allReservations:null,
  myReservations:null
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
      
    builder
    
      .addCase(allReservations.pending, (state) => {
        state.status = 'loading'; // Estado cuando está pendiente la solicitud
      })
      .addCase(allReservations.fulfilled, (state, action) => {
        
        state.status = 'succeeded'; // Estado cuando la solicitud se completa con éxito
        state.allReservations = action.payload; // Guardas las reservas en el estado
      })
      .addCase(allReservations.rejected, (state, action) => {
        state.status = 'failed'; // Estado cuando la solicitud falla
        state.error = action.payload; // Guardas el mensaje de error
      });
  },

});




// Exporta el reducer para conectarlo en el store
export default reservationsSlice.reducer;
