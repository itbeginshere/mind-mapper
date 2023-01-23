import React, { useState } from 'react';
import { useToggle } from '../../hooks/useToggle.';
import { useAppDispatch } from '../../redux/hooks';
import { NodeReduxActions } from '../../redux/node/actions';
import DialogActions from '../dialogs/DialogActions';
import DialogContent from '../dialogs/DialogContent';
import DialogHeader from '../dialogs/DialogHeader';
import DialogWrapper from '../dialogs/DialogWrapper';
import Textfield from '../inputs/Textfield';
import PlusSVG from '../svgs/PlusSVG';
import SaveSVG from '../svgs/SaveSVG';
import { v4 as uuidv4 } from 'uuid';
import { STARTING_POSITION } from '../../constants';

const AddNewNodeButton = () => {
    
    const dispatch = useAppDispatch();

    const [isDialogOpen, openDialog, closeDialog] = useToggle();
    const [name, setName] = useState<string>('');

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onAddNewNode = () => {
        dispatch(NodeReduxActions.addNode({
            id: uuidv4(),
            data: {
                label: name,
            },
            position: STARTING_POSITION,
        }));
        setName('');
        closeDialog();
    }

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
                    <Textfield 
                        value={name} 
                        onChange={onNameChange} 
                    />
                </DialogContent>
                <DialogActions>
                    <button 
                        className={'bg-cyan-300 p-2 rounded-md hover:shadow-lg'} 
                        onClick={onAddNewNode}
                    >
                        <SaveSVG className={'fill-white'} />
                    </button>
                </DialogActions>
            </DialogWrapper>
        </>
    )
}

export default AddNewNodeButton;