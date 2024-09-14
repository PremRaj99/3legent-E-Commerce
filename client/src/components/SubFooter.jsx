import React from 'react'
import FooterImage from "../assets/Footer.png"
import { CiMail } from 'react-icons/ci'

export default function SubFooter() {
  return (
    <div className='w-full relative'>
        <img src={FooterImage} className='w-full' alt="" />
        <div className="absolute top-0 flex flex-col items-center justify-center gap-4 w-full h-full">
            <h1 className='text-5xl font-medium'>Join Our Newsletter</h1>
            <p className='text-lg text-textSecondary'>Sign up for deals, new products and promotions</p>
            <div className="flex items-center text-lg gap-4 border-b-2 bg-background">
                <CiMail className='text-lg text-textSecondary'/>
                <input className='w-96 border-0 bg-transparent outline-none' type="email" placeholder='Email address' />
                <p className='bg-black text-white py-2 px-4 rounded-r-md'>Signup</p>
            </div>
        </div>
    </div>
  )
}
