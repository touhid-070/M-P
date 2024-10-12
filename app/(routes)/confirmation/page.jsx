import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Confirmation() {
  
  return (
    <div className='flex flex-col items-center justify-center p-20'>
        <CheckCircle className='h-9 w-9 text-green-500'/>
        <h2 className='font-bold text-3xl mt-5'>Your meeting scheduled</h2>
        <h2 className='text-lg text-gray-500 mt-5 mb-5'>Confirmation send</h2>
        <Link href={'/'}><Button >Thank you</Button></Link>
    </div>
  )
}

export default Confirmation