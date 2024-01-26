import { useState, useEffect } from 'react'
export default function Footer() {
    return (
        <div className="flex overflow-hidden w-full">
           <Link to="/" className='px-3 text-3xl'>Home</Link>
                <Link to="/" className='px-3 text-3xl'>Mint</Link>
                <Link to="/" className='px-3 text-3xl'>Staking</Link>
                <Link to="/" className='px-3 text-3xl'>Spray-FM</Link>
                <Link to="/" className='px-3 text-3xl'>Merch</Link>
                <Link to="/" className='px-3 text-3xl'>Whitepaper</Link>
        </div>
    )
}