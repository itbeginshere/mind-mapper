import React from 'react';

const Textfield = (props : React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    
    const { className, ...rest} = props;
    
    return (
        <input 
            className={ `${className} transition p-2 bg-gray-100 rounded-lg border-2 border-cyan-800 focus:border-cyan-300 active:border-cyan-300 hover:border-cyan-300 focus-visible:border-cyan-300 focus-within:border-cyan-300`} 
            {...rest}
        />
    );
}

export default Textfield;