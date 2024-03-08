import homeIcon from '../images/homeImg.webp'

export const Home = ({fullScreen}) => {
    return(
        <div className='fixed w-5/6 bgColor3 z-10 pb-6 flex flex-col justify-center items-end h-screen'>
            <div className="flex flex-col mr-24">
                <h1 className='text-white bold text-8xl flex justify-end items-center tracking-wide uppercase z-30'>Algorithmify</h1>
                <h3 className='text-white main text-sm flex mr-6 justify-end items-center tracking-wide uppercase z-30'>"Unlock the secrets of algorithms, one line of code at a time."</h3>
                <img className='z-20 imgHome' src={homeIcon}></img>
            </div>
        </div>
    )
}