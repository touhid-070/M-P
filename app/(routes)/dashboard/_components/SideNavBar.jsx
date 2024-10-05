"use client"
import { Button } from '@/components/ui/button'
import { Briefcase, Calculator, Clock, Plus, Settings } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {useState,useEffect}from 'react'

function SideNavBar() {
    const menu=[
        {
            id:1,
            name:"Meeting Type",
            path:'/dashboard/meeting-type',
            icon:Briefcase
        },
        {
            id:2,
            name:"Scheduled Meeting",
            path:'/dashboard/schedule-meeting',
            icon:Calculator
        },
        {
            id:3,
            name:"Availability",
            path:'/dashboard/availability',
            icon:Clock
        },
        {
            id:4,
            name:"Setting",
            path:'/dashboard/setting',
            icon:Settings
        },
    ]

    const path = usePathname();
    const [activePath,setActivePath] = useState(path) 

    useEffect(()=>{
        path&& setActivePath(path)
    },[path])
    return (
        <div className='p-5 py-14'>
            <div className='flex justify-center'>
                <div className='flex items-center gap-1 '>
                    <Image src='/logo.svg' width={10} height={10} alt='logo'
                        className='w-[30px] md:w-[30px] '
                    />
                    <span className='text-xl font-black text-[#007DFC]'>MeetPoint</span>
                </div>
            </div>
            <Button className='flex gap-2 mt-7 w-full rounded-full'><Plus /> Create</Button>

            <div className='mt-5 flex flex-col gap-5'>
                {menu.map((item,index)=>(
                    <Link href={item.path} key={index}>
                    <Button  className={`w-full flex gap-2 justify-start hover:bg-blue-100 ${activePath==item.path&&'text-primary bg-blue-100'}`} variant="ghost">
                        <item.icon/> {item.name}
                    </Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNavBar