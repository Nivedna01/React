import React from 'react'
import { ArrowRight } from 'lucide-react';

export const RightCardContent = (props) => {
  return (
    <div className='absolute h-full w-full  top-0 left-0 p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>
                {props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium iure sit inventore?</p>
            
            <div className='flex justify-between'>
                <button className=' bg-blue-500 text-white font-medium px-6 py-2 rounded-full'>{props.tag}</button>
                <button className=' bg-blue-500 text-white font-medium px-4 py-3 rounded-full'><ArrowRight  size={12} strokeWidth={3} /></button>
            </div>
            </div>
        </div>
  )
}
