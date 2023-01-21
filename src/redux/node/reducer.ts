import { createReducer } from '@reduxjs/toolkit';
import { Node } from 'reactflow';
import { NodeReduxActions } from './actions';

interface INodeReduxState {
    isLoading : boolean;
    list : Array<Node>;
}

const initialState : INodeReduxState = {
    isLoading: false,
    list: [],
}

export const nodeReducer = createReducer(initialState, (builder) => 
    builder.addCase(NodeReduxActions.setList, (state, action) => {
        state.list = action.payload;
    }).addCase(NodeReduxActions.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    })
)