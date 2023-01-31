import { Handle, Position } from 'reactflow';
import { ICircleNodeData } from '../../@types/nodes';

interface ICircleNodeProps {
    data : ICircleNodeData;
}

const CircleNode = (props : ICircleNodeProps) => {
    
    const { data } = props;
    
    return (
        <div 
            className={'w-36 h-36 bg-white border-black border-2 rounded-full flex justify-center items-center'}
        >
            <Handle type={'target'} position={Position.Top} />
            <div>
                <label>{data.label}</label>
            </div>
            <Handle type={'source'} position={Position.Bottom} />
        </div>
    );
}

export default CircleNode;