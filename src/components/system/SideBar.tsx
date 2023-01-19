import AddNewNodeButton from '../buttons/AddNewNodeButton';
import LogoutButton from '../buttons/LogoutButton';

const Sidebar = () => {

    return (
        <div className={'w-24 bg-cyan-300 shadow-xl flex flex-col items-center py-5 justify-between'}>
            <div className={'flex flex-col gap-2'}>
                <AddNewNodeButton />
            </div>
            <div className={'flex flex-col'}>
                <LogoutButton />
            </div>
        </div>
    );
}

export default Sidebar;