export type CustomNodes = 'circle' | 'default';
export const CustomNodeList = ['circle', 'default'];

export interface INodeData {
    label : string;
}

export interface ICircleNodeData extends INodeData { };