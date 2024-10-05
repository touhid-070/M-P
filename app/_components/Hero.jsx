import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>

        <div className='hidden lg:block'>
            <Image src='/pic.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute right-6'/>
            <Image src='/pic.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute top-48 left-16'/>
            <Image src='/pic.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute bottom-10 left-36'/>
            <Image src='/pic.png' width={100} height={100} className='h-[100px] object-cover rounded-full absolute right-16 bottom-32'/>
        </div>

        <div className='text-center max-w-2xl'>
        <h2 className='font-bold text-[60px] text-slate-700'>Easy scheduling ahead</h2>
        <h2 className='text-xl mt-5 text-slate-500 '>MeetPoint is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time -- and so much more.</h2>
        <div className='flex gap-4 flex-col mt-5'>
            <h3 className='text-sm'>Sign Up free with Google and Facebook</h3>
            <div className='flex justify-center gap-8'>
                <Button className='p-6 flex gap-4'> 
                    <Image src='/google.png' alt='google'width={30} height={30} />
                    Sign up with Google</Button>
                <Button className='p-6 flex gap-4'>
                <Image src='/facebook.png' alt='facebook'width={30} height={30} />
                    Sign up with Facebook</Button>
            </div>
            <hr></hr>
            <h2><Link href='' className='text-primary '>Sign Up Free with Email.</Link> No Credit Card required </h2>
        </div>
        </div>
        
    </div>
  )
}

export default Hero