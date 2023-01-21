interface IDialogActionsProps {
    children : React.ReactNode;
}

const DialogActions = (props : IDialogActionsProps) => {
    
    const { children } = props;
    
    return (
        <div className={'flex flex-row justify-end px-4 pt-0 pb-4'}>
            {children}
        </div>
    );
}

export default DialogActions;