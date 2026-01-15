import React from 'react'
import { ArrowUpRight} from 'lucide-react';
import Hero from './hero';



const leftContent = () => {
  return (
    <div className=' h-full w-1/3 flex flex-col justify-between p-8'>
        
        <Hero />

        <div >
        <ArrowUpRight  size={40} strokeWidth={3}  />
        </div>

        
        </div>
  )
}

export default leftContent