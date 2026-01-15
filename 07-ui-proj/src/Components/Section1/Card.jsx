import React from 'react'

import { RightCardContent } from './RightCardContent';

const Card = (props) => {
  return (
    <div className=' h-full w-70 rounded-4xl overflow-hidden relative flex shrink-0'>

        <img className='w-full h-full object-cover'
        src={props.img} alt="" />

        <RightCardContent id={props.id} tag={props.tag}/>
        </div>
  )
}

export default Card