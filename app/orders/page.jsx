import React from 'react'

import { FaShopify } from "react-icons/fa"
import { data } from '@/app/data/data.js'
const page = () => {
    return (
        <div className=' mr-20 bg-gray-100 min-h-screen' >

            <div className=' flex   px-4 pt-4 '>
                <h2>سفارش ها </h2>
            </div>
            <div className=' p-4 '>
                <div className=' w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto '>
                    <div className='  grid my-3 p-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center ' >

                        <span>سفارش </span>
                        <span className='  sm:text-right text-left '>وضعیت</span>
                        <span className=' hidden md:grid'>اخرین سفارش </span>
                        <span className=' hidden sm:grid'> نوع برداختش </span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className=' bg-gray-100 hover:bg-gray-200 rounded-lg my-3 p-2 grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center cursor-pointer '>
                                <div className=' flex '>
                                    <div className=' bg-purple-100 p-3 rounded-lg '>
                                        <FaShopify className=' text-purple-800 ' />
                                    </div>
                                    <div className=' pr-4 '>
                                        <  p className=' text-gray-800 font-bold'>ریال{order.total.toLocaleString()}</p>
                                        <p className=' text-gray-800 text-sm'>{order.name.first}</p>
                                    </div>
                                </div>
                                <p className=' text-gray-600  sm:text-right  text-left'>
                                    <span className={order.status == 'در حال انجام' ? "bg-green-400 p-2 rounded-lg" : order.status == 'تمام' ? "bg-blue-400 p-2 rounded-lg" : 'bg-yellow-400 p-2 rounded-lg '}> {order.status}</span>
                                </p>
                                <p className=' hidden md:flex '>{order.date}</p>
                                <div className=' sm:flex hidden bg-gray-200 rounded-lg '>
                                    <p >
                                        {order.method}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default page
