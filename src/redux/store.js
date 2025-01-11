import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import loaderReducer from './loaderSlice'; 

export const store = configureStore({
  reducer: {
    user: userSlice,
    loader: loaderReducer,
  },
});
