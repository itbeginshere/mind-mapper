import CrossSVG from '../svgs/CrossSVG';

interface IDialogHeaderProps {
    title : string;
    onClose : VoidFunction;
}

const DialogHeader = (props : IDialogHeaderProps) => {
    
    const { title } = props;
    const { onClose } = props;
    
    return (
        <div className={'bg-cyan-300 p-4 flex flex-row justify-between items-center rounded-t-lg shadow-md'}>
            <h1 className={'text-xl text-white font-medium'}>{title}</h1>
            <button 
                className={'p-1'}
                onClick={onClose}
            >  
                <CrossSVG width={24} height={24} className={'stroke-white'} />
            </button>
        </div>  
    );
}

export default DialogHeader;