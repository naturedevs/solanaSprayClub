export default function Member({img, name, desc}) {
    return (
        <div className="w-[260px] py-5">
            <img src={img} className='w-fit mx-auto'></img>
            <div className='text-white text-xl text-center pt-3'>
                <div>
                    {name} 
                </div>
                <div>
                    {desc} 
                </div>
            </div>
        </div>
    )
}