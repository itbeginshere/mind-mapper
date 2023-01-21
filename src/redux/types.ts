import { store } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
}>();