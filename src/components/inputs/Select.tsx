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
            className={'p-1'}
            onChange={onChange}
        >
            {renderedOptions}
        </select>
    );
}

export default Select;