"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React, { useState ,useEffect} from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import Image from 'next/image'
import Link from 'next/link'



function MeetingForm({setFormValue}) {

    const [themeColor, setThemeColor] = useState();
    const [eventName, setEventName] = useState();
    const [duration, setDuration] = useState(30);
    const [locationType, setLocationType] = useState();
    const [locationUrl, setLocationUrl] = useState();

    useEffect(()=>{
        setFormValue({
            eventName:eventName,
            duration:duration,
            locationType:locationType,
            locationUrl:locationUrl,
            themeColor:themeColor
        })
    },[eventName,duration,locationType,locationUrl,themeColor])

    return (
        <div className='p-7 '>
            <Link href={'/dashboard'}> <h2 className='flex gap-2 font-semibold'><ChevronLeft /> Cancel</h2></Link>
            <div className='mt-4'>
                <h2 className='font-bold text-2xl my-4'>Create New Event</h2>
                <hr />
            </div>
            <div className='flex flex-col gap-3 my-4'>
                <h2 className='font-bold'>Event Name *</h2>
                <Input placeholder='Name of your meeting event' onChange={(event)=>setEventName(event.target.value)}/>

                <h2 className='font-bold'>Duration *</h2>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='outline' className='max-w-40'>{duration} Min</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={()=>setDuration(15)}>15 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(30)}>30 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(45)}>45 Min</DropdownMenuItem>
                        <DropdownMenuItem onClick={()=>setDuration(60)}>60 Min</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


                <h2 className='font-bold'>Location *</h2>

                <div className='grid grid-cols-4 gap-3 '>

                    <div className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 cursor-pointer hover:border-primary ${locationType == 'Zoom' && 'bg-blue-100 border-primary'}`} onClick={() => setLocationType('Zoom')}>
                        <Image src='/zoom.png' width={30} height={30} />
                        <h2>Zoom</h2>
                    </div>

                    <div className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 cursor-pointer hover:border-primary ${locationType == 'Meet' && 'bg-blue-100 border-primary'}`} onClick={() => setLocationType('Meet')}>
                        <Image src='/new.png' width={30} height={30} />
                        <h2>Meet</h2>
                    </div>

                    <div className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 cursor-pointer hover:border-primary ${locationType == 'Phone' && 'bg-blue-100 border-primary'}`} onClick={() => setLocationType('Phone')}>
                        <Image src='/telephone.png' width={30} height={30} />
                        <h2>Phone</h2>
                    </div>

                    <div className={`border flex flex-col justify-center items-center p-3 rounded-lg hover:bg-blue-100 cursor-pointer hover:border-primary ${locationType == 'Other' && 'bg-blue-100 border-primary'}`} onClick={() => setLocationType('Other')}>
                        <Image src='/video-chat.png' width={30} height={30} />
                        <h2>Other</h2>
                    </div>
                </div>

                {locationType && <>
                    <h2 className='font-bold'>Add {locationType} Url *</h2>
                    <Input placeholder='Add Url' onChange={(event)=>setLocationUrl(event.target.value)}/>
                </>}


                <h2 className='font-bold'>Select Theme Color</h2>
                <div className='flex justify-evenly '>
                    <div className='mt-2'>
                        <h1 className={`bg-[#4F75FE] h-6 w-6 rounded-full cursor-pointer ${themeColor == '#4F75FE' && 'border-black border-4'}`} onClick={() => setThemeColor('#4F75FE')}></h1>
                    </div>
                    <div className='mt-2'>
                        <h1 className={`bg-[#13C38B] h-6 w-6 rounded-full cursor-pointer ${themeColor == '#13C38B' && 'border-black border-4'}`} onClick={() => setThemeColor('#13C38B')}></h1>
                    </div>
                    <div className='mt-2'>
                        <h1 className={`bg-[#9F3CFE] h-6 w-6 rounded-full cursor-pointer ${themeColor == '#9F3CFE' && 'border-black border-4'}`} onClick={() => setThemeColor('#9F3CFE')}></h1>
                    </div>
                    <div className='mt-2'>
                        <h1 className={`bg-[#FF555D] h-6 w-6 rounded-full cursor-pointer ${themeColor == '#FF555D' && 'border-black border-4'}`} onClick={() => setThemeColor('#FF555D')}></h1>
                    </div>
                    <div className='mt-2'>
                        <h1 className={`bg-[#FF7D4F] h-6 w-6 rounded-full cursor-pointer ${themeColor == '#FF7D4F' && 'border-black border-4'}`} onClick={() => setThemeColor('#FF7D4F')}></h1>
                    </div>
                </div>
            </div>
            <Button className='w-full' disabled={(!eventName || !duration || !locationType || !locationUrl)}>Create</Button>
        </div>
    )
}

export default MeetingForm