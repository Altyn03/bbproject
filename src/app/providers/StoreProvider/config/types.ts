import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store';

export type AppStore = ReturnType<typeof configureStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
