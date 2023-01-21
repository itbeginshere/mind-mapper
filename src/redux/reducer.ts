import { combineReducers } from '@reduxjs/toolkit'
import { edgeReducer } from './edge/reducer';
import { nodeReducer } from './node/reducer';

export const rootReducer = combineReducers({
    nodeState: nodeReducer,
    edgeState: edgeReducer,
});