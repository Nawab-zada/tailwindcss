import React from 'react'
import Image from 'next/image'
import gt3 from "./assests/WhatsApp Image 2024-07-13 at 11.12.20 AM.jpeg"
const Project = () => {
  return (
    <div>
         <div className='flex justify-center items-center bg-slate-400 m-4 p-6 '>
      <div className='w-2/3 text-center text-uppercase tracking-wider'>
        <h1>
          welcome to panavaverse
        </h1>
         <h2>
            happy to see you
         </h2>
         <button className='text-white border-black'>
            Get started
         </button>
      </div>
      <div className='bg-slate-400'>
      <Image src={gt3} alt='khan' width={150} height={150} className='rounded-full'/>
      </div>
     
    </div>
   
      </div>
    
  )
}

export default Project