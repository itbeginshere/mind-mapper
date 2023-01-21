import { store } from './store';

export function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
