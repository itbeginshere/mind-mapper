import { IBlock } from '../../models/block/block';
import { withPayloadType } from '../types';
import { createAction } from '@reduxjs/toolkit';

export class BlockReduxActions {
    public static readonly setIsLoading = createAction('BLOCK_SET_IS_LOADING', withPayloadType<boolean>());
    public static readonly setList = createAction('BLOCK_SET_LIST', withPayloadType<Array<IBlock>>()); 
}

