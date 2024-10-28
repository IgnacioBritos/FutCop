import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk para el login, que hace la petición y devuelve los datos del usuario
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users/login",
        userData
      );
      return response.data.user; // Devuelves los datos del usuario
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  user: null, // Aquí guardarás los datos del usuario tras login
  isAuthenticated: false, // Estado para saber si está autenticado
  isLoading: false, // Para mostrar cargando mientras se realiza la petición
  error: null, // Para guardar el mensaje de error si lo hubiera
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducer para hacer logout
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true; // Cuando empieza la petición
        state.error = null; // Limpias el error previo
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload; // Guardas los datos del usuario
        state.isAuthenticated = true; // Marca como autenticado
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Ha ocurrido un error"; // Guardas el error si ocurre
      });
  },
});

// Exporta el action para hacer logout si lo necesitas
export const { logoutUser } = userSlice.actions;

// Exporta el reducer para conectarlo en el store
export default userSlice.reducer;
