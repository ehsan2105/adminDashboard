import React from 'react'
import {data} from '@/app/data/data.js'
import { FaCartShopping } from "react-icons/fa6";
function Oreders() {
  return (
    <div className=' w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border  rounded-lg bg-white overflow-y-scroll '>
      <h1>
      اردر های من 
      </h1>
      <ul>
        {data.map((order,id)=>(
          <li key={id} className=' bg-gray-50 hover:bg-gray-300  rounded-lg my-3 p-2 flex items-center cursor-pointer'>
            <div  className=' bg-purple-100 rounded-lg p-3 '>
              <FaCartShopping className=' text-purple-800 '/>
            </div>
            <div className='pr-4 '>
              <p className=' text-gray-800 font-bold '>ریال{order.total}</p>
              <p className=' text-gray-400 text-sm '>{order.name.first}</p>
            </div>
            <p className=' lg:flex md:hidden text-sm absolute left-6'>{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Oreders
