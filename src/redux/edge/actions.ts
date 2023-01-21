import { Edge } from 'reactflow';
import { withPayloadType } from '../types';
import { createAction } from '@reduxjs/toolkit';

export class EdgeReduxActions {
    public static readonly setIsLoading = createAction('EDGE_SET_IS_LOADING', withPayloadType<boolean>());
    public static readonly setList = createAction('EDGE_SET_LIST', withPayloadType<Array<Edge>>()); 
}

