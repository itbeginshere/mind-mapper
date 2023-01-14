import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

const TextUpdaterNode = ({ data }) => {
    
    const onChange = useCallback((event) => {
        console.log(event.target.value);
    }, []);

    return (
        <>
            <Handle type={'target'} position={Position.Top} />
            <div className={'flex-col'}>
                <label htmlFor={'text'}>Text</label>
                <input id={'text'} name={'text'} onChange={onChange} />
            </div>
            <Handle type={'source'} position={Position.Bottom} id={'a'} />
            <Handle type={'source'} position={Position.Bottom} id={'b'} style={handleStyle} />
        </>
    );
}

export default TextUpdaterNode;