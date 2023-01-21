import { combineReducers } from '@reduxjs/toolkit'
import { blockReducer } from './block/reducer';

export const rootReducer = combineReducers({
    blockReducer,
});