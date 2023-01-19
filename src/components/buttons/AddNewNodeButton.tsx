import { useState } from 'react';
import PlusSVG from '../svgs/PlusSVG';

const AddNewNodeButton = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    
    const openDialog = () => {
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);
    }

    return (
         <button 
            className={'transition group rounded-full p-2 border-2 border-white bg-cyan-300 hover:shadow-xl hover:bg-white'}
            onClick={openDialog}
        >
            <PlusSVG className={'transition fill-white group-hover:fill-cyan-400'}/>
        </button>
    )
}

export default AddNewNodeButton;