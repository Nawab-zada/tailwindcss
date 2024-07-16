import React from 'react'
import Image from 'next/image'
import nwb from "./../assets/WhatsApp Image 2024-07-13 at 11.12.20 AM.jpeg"
const Flexrverse = () => {
  return (
    <div className='bg-blue-200 '>
<div className='flex m-2 p-4 flex-row-reverse justify-center items-center'>
    <div>
<Image src={nwb} alt='khan' width={200} height={200} className='w-[100px] m-2 rounded-lg'/>
    </div>
    <div>
     <h1>
        khan
     </h1>
     <p>
        this a new div for the understanding of the flex
     </p>
    </div>
    

</div>
<div className='flex m-2 p-2 justify-center items-center'>
    <div className='m-2'>
<Image src={nwb} alt='khan' width={200} height={200} className='w-[100px]'/>
    </div>
    <div>
     <h1>
        khan
     </h1>
     <p>
        this a new div for the understanding of the flex
     </p>
    </div>
    
</div>


    </div>
  )
}

export default Flexrverse