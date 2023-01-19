import LogoutSVG from '../svgs/LogoutSVG'

const LogoutButton = () => {
    return (
        <button className={'transition group rounded-full p-3 border-2 border-white bg-cyan-300 hover:shadow-xl hover:bg-white'}>
            <LogoutSVG height={27} width={27} className={'transition fill-white group-hover:fill-cyan-400'}/>
        </button>
    )
}

export default LogoutButton;