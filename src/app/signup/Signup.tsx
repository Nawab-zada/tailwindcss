import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
        <div className='bg-gray-400 w-[150px] h-[150px] mx-auto flex flex-col justify-center text-center'>
            
                <Link href={"./home"} className=' bg-blue-500 m-2  text-white rounded-1xl'>sigin 
                </Link>
                <Link href={"./home"} className=' bg-white m-2 text-blue-600 rounded-1xl'>sign up 
                </Link>
          
        </div>
    </div>
  )
}

export default Signup