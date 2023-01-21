import { createReducer } from '@reduxjs/toolkit';
import { Edge } from 'reactflow';
import { EdgeReduxActions } from '../edge/actions';

interface IEdgeReduxState {
    isLoading : boolean;
    list : Array<Edge>;
}

const initialState : IEdgeReduxState = {
    isLoading: false,
    list: [],
}

export const edgeReducer = createReducer(initialState, (builder) => 
    builder.addCase(EdgeReduxActions.setList, (state, action) => {
        state.list = action.payload;
    }).addCase(EdgeReduxActions.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    })
)