import React from 'react'
import LeftContent from './leftContent'
import RigthContent from './rigthContent'

const page1Content = (props) => {
  return (
    <div className='flex gap-10 h-[90vh]  px-13 py-10 item-center'>
        <LeftContent />
        <RigthContent users={props.users}/>
    </div>
  )
}

export default page1Content