"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
      <div className='flex items-center justify-between p-5 shadow-sm'>
        <div className='flex items-center gap-1 '>
          <Image src='/logo.svg' width={10} height={10} alt='logo'
            className='w-[30px] md:w-[30px] '
          />
          <span className='text-xl font-black text-[#007DFC]'>MeetPoint</span>
        </div>

        <ul className='hidden md:flex gap-14 font-medium text-lg'>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
          <li className='hover:text-primary transition-all duration-300 cursor-pointer '>About us</li>
        </ul>
        <div className='flex gap-5'>
          <LoginLink><Button variant="ghost">Login</Button></LoginLink>
          <RegisterLink><Button>Get Started</Button></RegisterLink>
        </div>
      </div>
    </div>
  )
}

export default Header