import {Link} from 'react-router-dom'
import {Typography} from "@material-tailwind/react"
import icons from '../../assets/svg/5icons.svg'

export default function Header() {
    return (
        <div className="flex flex-row justify-between overflow-hidden w-full bg-black text-white h-[100px] items-center px-10">
            <div className="">
                <Link to="/" className='px-3 text-3xl'>Home</Link>
                <Link to="/" className='px-3 text-3xl'>Mint</Link>
                <Link to="/" className='px-3 text-3xl'>Staking</Link>
                <Link to="/" className='px-3 text-3xl'>Spray-FM</Link>
                <Link to="/" className='px-3 text-3xl'>Merch</Link>
                <Link to="/" className='px-3 text-3xl'>Whitepaper</Link>
            </div>
            <div className='flex flex-col gap-2 pt-3 items-center pr-5'>
                <div className='border-2 border-gray-500 rounded-md text-3xl text-center px-3 py-1'>
                    Connect Wallet
                </div>
                <div className='flex flex-row'>
                    <img src={icons} className='w-[180px]'></img>
                </div>
            </div>
        </div>
    )
}