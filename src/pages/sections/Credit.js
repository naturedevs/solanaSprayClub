import credit from '../../assets/svg/credit.svg'

export default function Credit() {
    return (
        <div className="relative mt-[-300px] max-w-[1400px] p-8 text-center mx-auto w-full block items-center-z-40 py-20 text-white text-4xl font-normal font-['Inter']">
            <img src={credit} className='mx-auto max-w-fit w-1/2 pb-5'/>
                <br/>
                <br/>
        </div>
    )
}