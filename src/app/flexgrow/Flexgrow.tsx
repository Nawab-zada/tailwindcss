
import React from 'react'
import Link from 'next/link'
export const Flexgrow = () => {
  return (
    <div>
     <div className=' flex justify-center bg-teal-600 w-[400px] items-center p-4 mx-auto'>
        
        <input type="text" placeholder='enter your email'className='flex-grow'/>
        <button type='submit' className='bg-teal-200 border-teal-400 mx-2 flex-grow '>subscribe</button>
    
     </div>
         <div className='bg-teal-100 p-3 w-[300px] m-3 mx-auto flex flex-col '>
            <h2>
                welcome to tailwind css class
            </h2>
            <p className='flex-grow'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ipsa odio unde praesentium molestias perspiciatis, quas dolorem error animi sequi itaque consectetur quo delectus rerum voluptatem cum corrupti ea illo!
            </p>
            <button type='submit' className='flex justify-between bg-orange-600 text-center'>SuBScribe</button>
         </div>
         <div className='flex justify-between '>
         <button type='submit' className='flex-grow-[2] mx-2 bg-orange-600 text-center'>SuBScribe</button>
         <button type='submit' className='flex-grow-[1] mx-2 bg-orange-600 text-center'>SuBScribe</button>
         <button type='submit' className='flex-grow-[] mx-3 bg-orange-600 text-center'>SuBScribe</button> </div>
         <ul className='flex justify-between bg-slate-300'>
           <Link href={"./"} className='flex-grow-[2] bg-slate-400  p-3'>
           home
           </Link> 
           <Link href={"./"} className='flex-grow-[1] p-3'>
           about
           </Link> 
           <Link href={"./"} className='flex-grow-[1] p-3'>
           page
           </Link> 


            
            </ul>   
    </div>
  )
}   
export default Flexgrow