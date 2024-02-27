import { configureStore } from '@reduxjs/toolkit';
import todos from './TodoSlice';

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: { todos },
});
