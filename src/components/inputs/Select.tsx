import { useMemo } from 'react';
import { CapitaliseEachWord } from '../../services/EverydayFunctions';

interface ISelectProps {
    value : string;
    options : Array<string>;
    onChange : (event : React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props : ISelectProps) => {
    
    const { value, options } = props;
    const { onChange } = props;

    const renderedOptions = useMemo(( ) => {
        return options.map(x => (
            <option key={x} value={x}>
                {CapitaliseEachWord(x)}
            </option>
        ));
    }, []);

    return (
        <select 
            defaultValue={value}
            className={'transition p-2 bg-gray-100 rounded-lg border-2 border-cyan-800 focus:border-cyan-300 active:border-cyan-300 hover:border-cyan-300 focus-visible:border-cyan-300 focus-within:border-cyan-300'}
            onChange={onChange}
        >
            {renderedOptions}
        </select>
    );
}

export default Select;

// Comment
// Comment 
// Comment