import { IBlock } from '../../models/block/block';
import { createReducer } from '@reduxjs/toolkit';
import { BlockReduxActions } from './actions';

interface IBlockReduxState {
    isLoading : boolean;
    list : Array<IBlock>;
}

const initialState : IBlockReduxState = {
    isLoading: false,
    list: [],
}

export const blockReducer = createReducer(initialState, (builder) => 
    builder.addCase(BlockReduxActions.setList, (state, action) => {
        state.list = action.payload;
    }).addCase(BlockReduxActions.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    })
)