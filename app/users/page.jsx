import React from 'react'
import { FaUser } from "react-icons/fa";
import { data } from '@/app/data/data.js'
import Oreders from '../commponets/Oreders';
const page = () => {
    return (
        <div className=' mr-20  min-h-screen  bg-gray-100'>

            <div className=' flex  p-4 '>
                <h2>
                    مشتری ها
                </h2>
            </div>
            <div className=' p-4 mx-4  rounded-lg  bg-slate-50'>

                <div className=' w-full m-auto border rounded-lg bg-white overflow-y-auto'> </div>
                <div className='  grid my-3 p-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2  items-center justify-between cursor-pointer'>

                    <span> اسم</span>
                    <span className=' sm:text-right  text-left '> ایمیل</span>
                    <span className=' hidden md:grid'> اخرین خرید</span>
                    <span className=' hidden sm:grid'> نوع برداخت </span>
                </div>
                    <ul>
                        {data.map((order,id)=>(

                            <li key={id}className=' bg-gray-20  hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'> 
                                <div className=' flex items-center  '>
                                    <div className=' bg-purple-100 p-3 rounded-lg'>
                                    <FaUser  className=' text-purple-900'/>
                                    </div>
                                    <p className=' pr-4 '>  {order.name.first+' '+order.name.last}</p>
                                </div>
                                <p className=' text-gray-600 sm:text-right  text-left'>test{order.id}@test.com</p>
                                <p className=' hidden md:flex '> {order.date}</p>
                                <div className=' sm:flex hidden justify-center items-center '>
                                     <p>{order.method}</p>

                                </div>
                            </li>
                        ))}
                    </ul>
            </div>


        </div>
    )
}

export default page
