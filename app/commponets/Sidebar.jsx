import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar() {
    return (
        <>
            <div className='flex'>

                <div className='  fixed w-20 h-screen p-4 bg-white border-l-[1px] flex flex-col justify-between'>
                    <div className=' flex flex-col items-center '>
                        <Link href={'/'}>
                            <div className=' bg-purple-900  text-white p-3 rounded-lg inline-block'>
                                <IoHomeOutline size={20} />
                            </div>
                        </Link>
                        <span className=' border-b-[2px] border-gray-200 w-full p-2 '></span>
                        <Link href={'/orders'}>
                            <div className=' bg-gray-500 hover:bg-purple-900 my-4 cursor-pointer  text-white p-3 rounded-lg inline-block'>
                                <IoMenu size={20} />
                            </div>
                        </Link>
                        <Link href={'/users'}>
                            <div className=' bg-gray-500 hover:bg-purple-900 my-4 cursor-pointer  text-white p-3 rounded-lg inline-block'>
                                <FaUser size={20} />
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div className=' bg-gray-500 hover:bg-purple-900 my-4 cursor-pointer  text-white p-3 rounded-lg inline-block'>
                                <FaLock size={20} />
                            </div>
                        </Link>
                        <Link href={'/'}>
                            <div className=' bg-gray-500 hover:bg-purple-900 my-4 cursor-pointer  text-white p-3 rounded-lg inline-block'>
                                <IoSettingsOutline size={20} />
                            </div>
                        </Link>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Sidebar
