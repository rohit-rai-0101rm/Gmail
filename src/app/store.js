import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/Mail/mailSlice';
import userReducer from '../features/User/userSlice';

export const store = configureStore({
  reducer: {
    mail:mailReducer,
    user:userReducer
  },
});
