
interface IDialogWrapperProps {
    open : boolean;
    children : React.ReactNode;
    onClose : VoidFunction;
}

const DialogWrapper = (props : IDialogWrapperProps) => {
    
    const { open, children } = props;
    const { onClose } = props;

    return (
        <>
            <dialog
                open={open}
                className={'fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] m-0 p-0 z-20 rounded-lg shadow-lg'}
                onClose={onClose}
            >
                {children}
            </dialog>
            {
                open && (
                    <div className={'fixed top-0 left-0 h-full w-full bg-black opacity-30 z-10'} />
                )
            }
        </>
    );
}

export default DialogWrapper;