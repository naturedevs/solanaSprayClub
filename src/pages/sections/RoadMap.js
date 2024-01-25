import roadMap from '../../assets/svg/roadMap.svg'

export default function HeroText() {
    return (
        <div className="relative max-w-[1400px] p-8 text-center mx-auto w-full block items-center-z-40 py-20 text-white text-4xl font-normal font-['Inter']">
            <img src={roadMap} className='mx-auto max-w-fit w-1/2 pb-5'/>
                <br/>
                <br/>
            <div>
                Pre-Mint! Engagement Phase....This stage will no doubt be the toughest, but also
                the most rewarding. We will engage with as many people and teams as possible and
                grow a community ready to build a future with. We have lots to prepare for and
                will continue to work our socks off to ensure we are set up for success!
                <br/>
                <br/>
                Post Mint! Build Phase....We will be committing a massive proportion of
                royalties to both charity and futher developing SSC and it’s initial sub
                business, Spray-FM. We will deliver our staking platform and tokenomics whilst
                building on our partnerships and taking our brand to the next level.
                <br/>
                <br/>
                Months 1-6! Community Phase....It is through these months that Solana Spray Club
                and Spray-FM will come to life. The bigger picture will become clearer and
                clearer. Investors will have access to exclusive content, staking, rewards and
                we will have our merchandise store fully operational.
                <br/>
                <br/>
                Months 6-12....Expansion Phase....We have a lot of plans in the draft book ready
                to go in this phase. Having set the foundations for success in the first 3
                phases, we will assess our business and expand in the areas that compliment us
                the most whilst bolstering any weak spots ensuring we stay on an upwards
                trajectory.
                <br/>
                <br/>
                12 Months+....Delivery Phase....Over the first 12 months our main aim is to
                build a sustainably profitable business which delivers a ROI to our community.
                And although our community would of been recieving rewards and exclusivity over
                this period we believe it is beyond the first 12 months of growth that the
                benefits will truly kick in! The passive income and exclusivity will multiply
                into one of the most rewarding projects online.
                <br/>
                <br/>
            </div>
        </div>
    )
}