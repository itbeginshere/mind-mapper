interface IDialogContentProps {
    children : React.ReactNode;
}

const DialogContent = (props : IDialogContentProps) => {
    
    const { children } = props;
    
    return (
        <div className={'p-4'}>
            {children}
        </div>
    );
}

export default DialogContent;