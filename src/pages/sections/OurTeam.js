import ourTeam from '../../assets/svg/ourTeam.svg'
import Member from '../../components/Member'
import member1 from "../../assets/svg/member1.svg"
import member2 from "../../assets/svg/member2.svg"
import member3 from "../../assets/svg/member3.svg"
import member4 from "../../assets/svg/member4.svg"
import member5 from "../../assets/svg/member5.svg"
import member6 from "../../assets/svg/member6.svg"
import member7 from "../../assets/svg/member7.svg"
import { useState, useEffect } from 'react'

export default function OurTeam() {
    return (
        <div className=" relative max-w-[1400px] p-8 text-center mx-auto w-full block items-center-z-40 py-20 text-white text-4xl font-normal font-['Inter']">
            <img src={ourTeam} className='mx-auto max-w-fit w-1/2 pb-5'/>
                <br/>
                <br/>
            <div className='flex flex-wrap gap-[5%] justify-center'>
                <Member img={member1} name={"Callum"} desc={"Head of Operations"}/>
                <Member img={member2} name={"Bais"} desc={"Artist"}/>
                <Member img={member3} name={"Morio Seiki"} desc={"Head of Development"}/>
                <Member img={member4} name={"James"} desc={"Finance Strategist"}/>
                <Member img={member5} name={"Josh"} desc={"Head of marketing"}/>
                <Member img={member6} name={"Adz"} desc={"Community Manager"}/>
                <Member img={member7} name={"Dan"} desc={"Community Support"}/>
            </div>
        </div>
    )
}