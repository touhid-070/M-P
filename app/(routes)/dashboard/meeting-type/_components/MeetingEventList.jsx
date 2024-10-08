"use client"
import { Input } from '@/components/ui/input'
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function MeetingEventList() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [businessInfo,setBusinessInfo]=useState()
    const [eventList, setEventList] = useState([]);

    const getEventList = async () => {
        setEventList([]);
        const q = query(collection(db, "MeetingEvent"), where("createdBy", "==", user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            setEventList(prevEvent => [...prevEvent, doc.data()])
        });
    }
    useEffect(() => {
        user && getEventList();
        user&&BusinessInfo();
    }, [user])

    const BusinessInfo=async()=>{
        const docRef=doc(db,'Business',user?.email);
        const docSnap=await getDoc(docRef);
        setBusinessInfo(docSnap.data())
    }

    const onDeleteMeetingEvent = async (event) => {

        await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp => {
            toast('Meeting Event Deleted!');
            getEventList();
        })
    }

    const onCopyClickHandler = (event) => {
        const meetingEventUrl=process.env.NEXT_PUBLIC_BASE_URL+'/'+businessInfo.businessName+'/'+event.id
        navigator.clipboard.writeText(meetingEventUrl);
        toast('Copied to Clipboard')
    }

    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
            {eventList.length > 0 ? eventList?.map((event, index) => (
                <div className='border shadow-md border-t-8 rounded-lg p-5 flex flex-col gap-3'
                    style={{ borderTopColor: event?.themeColor }}
                >
                    <div className='flex justify-end'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Settings className='text-gray-500 cursor-pointer' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem className='flex gap-2 font-semibold'><Pen />Edit</DropdownMenuItem>
                                <DropdownMenuItem className='flex gap-2 font-semibold' onClick={() => onDeleteMeetingEvent(event)}><Trash /> Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                    <h2 className='font-medium text-xl'>{event?.eventName}</h2>
                    <div className='flex justify-between'>
                        <h2 className='flex gap-2 text-gray-500'><Clock />{event.duration} Min</h2>
                        <h2 className='flex gap-2 text-gray-500'><MapPin />{event.locationType} Min</h2>
                    </div>
                    <hr />

                    <div className='flex justify-between '>
                        <h2 className='flex gap-2 text-sm items-center cursor-pointer text-primary' onClick={() => {
                            onCopyClickHandler(event)

                        }}><Copy className='h-4 w-4' />Copy Link</h2>
                        <Button variant='outline' className='rounded-full cursor-pointer border-primary text-primary'>Share</Button>
                    </div>
                </div>
            ))
                : <h2>Loading...</h2>
            }
        </div>
    )
}

export default MeetingEventList