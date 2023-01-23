import { Node } from 'reactflow';
import { withPayloadType } from '../types';
import { createAction } from '@reduxjs/toolkit';

export class NodeReduxActions {
    public static readonly setIsLoading = createAction('NODE_SET_IS_LOADING', withPayloadType<boolean>());
    public static readonly setList = createAction('NODE_SET_LIST', withPayloadType<Array<Node>>()); 
    public static readonly addNode = createAction('NODE_ADD_NODE', withPayloadType<Node>());
}

