import { useToggle } from '../../hooks/useToggle.';
import DialogActions from '../dialogs/DialogActions';
import DialogContent from '../dialogs/DialogContent';
import DialogHeader from '../dialogs/DialogHeader';
import DialogWrapper from '../dialogs/DialogWrapper';
import PlusSVG from '../svgs/PlusSVG';
import SaveSVG from '../svgs/SaveSVG';

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
            <DialogWrapper
                open={isDialogOpen}
                onClose={closeDialog}
            >
                <DialogHeader title={'Add Node'} onClose={closeDialog}/>
                <DialogContent>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                    <div>display something really long to expand the dialog</div>
                </DialogContent>
                <DialogActions>
                    <button className={'bg-cyan-300 p-2 rounded-md hover:shadow-lg'}>
                        <SaveSVG className={'fill-white'} />
                    </button>
                </DialogActions>
            </DialogWrapper>
        </>
    )
}

export default AddNewNodeButton;