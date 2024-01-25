import {Link} from 'react-router-dom'
import {Typography} from "@material-tailwind/react"
import icons from '../../assets/svg/5icons.svg'
import hero from '../../assets/svg/hero.svg'
import herobg from '../../assets/svg/herobg.svg'
import herotext from '../../assets/svg/heroText.svg'

export default function HeroText() {
    return (
        <div className="relative w-full block items-center-z-40 py-20 p-10">
            <div
                className="max-w-[1411px] w-full h-fit text-center mx-auto text-white text-4xl font-normal font-['Inter']  p-8 rounded-[80px] bg-black shadow-white shadow-lg">
                Welcome all....Welcome to our Web3 Hub and the home of one of the freshest projects
                of 2024. Solana Spray Club is not only bringing you some totally original
                artwork to turn the NFT world on its head, we are also bringing some fantastic utility
                    for holders 
                of our artwork.
                <br/>
                Not only will holders be able to access exclusive content through our
                revolutionary streaming platform, they will also be earning passive income day by day and
                    week by 
                week.
                <br/>Here at Solana Spray Club everybody gets a slice of the pie...as our
                    project builds over 
                time we will be opening many business ventures under the Solana Spray Club brand 
                and a percentage of profits will be returned to SSC members through airdrops and 
                royalties.
                <br/>
                All this will be achievable whilst supporting charities that mean most to our
                team, our 
                community and our partners. 
                What's more, our commitment to honestly and sustainability is unwavering. No
                false 
                promises, no smoke and mirrors - just a genuine and transparent journey. 
                Get ready for Spray Season - the adventure awaits!
                <br/>
                </div>
        </div>
    )
}