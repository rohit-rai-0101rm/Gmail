import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/Mail/mailSlice';
export const store = configureStore({
  reducer: {
    mail:mailReducer
  },
});
