import {Link} from 'react-router-dom'
import {Typography} from "@material-tailwind/react"
import icons from '../../assets/svg/5icons.svg'
import icon_twitter from '../../assets/img/ico_twitter.png'
import ico_discord from '../../assets/img/ico_discord.png'
import ico_instgram from '../../assets/img/ico_instgram.png'
import ico_tiktok from '../../assets/img/ico_tiktok.png'
import ico_youtube from '../../assets/img/ico_youtube.png'
import {Disclosure} from '@headlessui/react'
import {useState} from 'react'

export default function Header() {
    const [open,
        setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div
            as="div"
            className="flex flex-row justify-between overflow-hidden w-full bg-black text-white h-[100px] items-center px-10">
            <div className="hidden xl:block">
                <Link to="/" className='px-3 text-3xl'>Home</Link>
                <Link to="/" className='px-3 text-3xl'>Mint</Link>
                <Link to="/" className='px-3 text-3xl'>Staking</Link>
                <Link to="/" className='px-3 text-3xl'>Spray-FM</Link>
                <Link to="/" className='px-3 text-3xl'>Merch</Link>
                <Link to="/" className='px-3 text-3xl'>Whitepaper</Link>
            </div>
            <div className="flex xl:hidden justify-end flex-col" onClick={handleClick}>
                <span className="text-xl  navbar-toggler-icon"></span>
                <div
                    className={`absolute  sm:w-[70%] md:w-[50%] w-screen h-screen left-0 top-0 z-50 bg-black flex flex-col text-white transition-all ${open
                    ? "left-0"
                    : "-left-[110%]"}`}>
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/" className='px-3 text-3xl'>Home</Link>
                    <Link to="/" className='px-3 text-3xl'>Mint</Link>
                    <Link to="/" className='px-3 text-3xl'>Staking</Link>
                    <Link to="/" className='px-3 text-3xl'>Spray-FM</Link>
                    <Link to="/" className='px-3 text-3xl'>Merch</Link>
                    <Link to="/" className='px-3 text-3xl'>Whitepaper</Link>
                </div>
            </div>
            <div className='flex flex-col gap-2 pt-3 items-center pr-5'>
                <div
                    className='border-2 border-gray-500 rounded-md text-3xl text-center px-3 py-1 cursor-pointer'>
                    Connect Wallet
                </div>
                <div className='flex flex-row'>
                    <Link to="/">
                        <img src={icon_twitter} className='w-[42px] px-1 '></img>
                    </Link>
                    <Link to="/">
                        <img src={ico_instgram} className='w-[42px] px-1'></img>
                    </Link>
                    <Link to="/">
                        <img src={ico_youtube} className='w-[42px] px-1'></img>
                    </Link>
                    <Link to="/">
                        <img src={ico_tiktok} className='w-[42px] px-1'></img>
                    </Link>
                    <Link to="/">
                        <img src={ico_discord} className='w-[42px] px-1'></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}