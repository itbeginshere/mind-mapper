import { createReducer } from '@reduxjs/toolkit';
import { Edge, MarkerType } from 'reactflow';
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
        state.list = action.payload.map(edge => ({
        ...edge,
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: 'black',
          width: 26, 
          height: 26,
        }
      }));
    }).addCase(EdgeReduxActions.setIsLoading, (state, action) => {
        state.isLoading = action.payload;
    })
)