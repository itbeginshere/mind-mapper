import React from 'react';

interface ITextfieldProps {
    value : string;
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield = (props : ITextfieldProps) => {
    
    const { value } = props;
    const { onChange } = props;
    
    return (
        <input 
            className={'transition p-2 bg-gray-100 rounded-lg border-2 border-white focus:border-cyan-300 active:border-cyan-300 hover:border-cyan-300 focus-visible:border-cyan-300 focus-within:border-cyan-300'} 
            value={value} 
            onChange={onChange} 
        />
    );
}

export default Textfield;