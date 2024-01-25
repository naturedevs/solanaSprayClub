import {Link} from 'react-router-dom'
import {Typography} from "@material-tailwind/react"
import icons from '../../assets/svg/5icons.svg'
import hero from '../../assets/svg/hero.svg'
import herobg from '../../assets/svg/herobg.svg'
import herotext from '../../assets/svg/heroText.svg'

export default function Hero() {
    return (
        <div className="relative w-full block items-center-z-40">
            <img src={herobg} className='mx-auto -z-30 block mt-7'></img>
            <img src={hero} className='absolute top-1/2 -translate-y-1/2 right-1/2 h-[70%] -translate-x-[40%] z-20'></img>
            {/* <img src={herotext} className='absolute bottom-1/2 -translate-y-0 left-1/2 w-[50%] -translate-x-[20%] z-20'></img> */}
            <div className='absolute bottom-1/2 translate-y-[20%] left-1/2 w-[50%] -translate-x-[20%] z-20 text-white'>
                <img src={herotext} className='w-full'></img>
                <div className='flex gap-4 items-center w-full justify-center -translate-x-[10%] text-2xl pt-4'>
                    <div>Art</div>
                    <div>-</div>
                    <div>Rewards</div>
                    <div>-</div>
                    <div>Content</div>
                    <div>-</div>
                    <div>Charity</div>
                </div>
            </div>
        </div>
    )
}