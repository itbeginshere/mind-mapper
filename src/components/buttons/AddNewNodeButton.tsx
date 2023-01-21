import { useToggle } from '../../hooks/useToggle.';
import PlusSVG from '../svgs/PlusSVG';

const AddNewNodeButton = () => {
    
    const [isDialogOpen, openDialog, closeDialog] = useToggle();

    return (
        <>
            <button 
                className={'transition group rounded-full p-2 border-2 border-white bg-cyan-300 hover:shadow-xl hover:bg-white'}
                onClick={openDialog}
            >
                <PlusSVG className={'transition fill-white group-hover:fill-cyan-400'}/>
            </button>
            <dialog
                open={isDialogOpen}
                onClose={closeDialog}
            >
            
            </dialog>
        </>
    )
}

export default AddNewNodeButton;