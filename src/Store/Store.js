import {
  createSlice, configureStore,
} from '@reduxjs/toolkit';

const entradasState = {
  entradas: [],
};

const entradasSlice = createSlice({
  name: 'entradaSlice',
  initialState: entradasState,
  reducers: {
    updateEntradas(state, action) {
      state.entradas.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: { entradasState: entradasSlice.reducer },
});

export const entradasActions = entradasSlice.actions;

export default store;
