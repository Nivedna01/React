import React from 'react'
import Card from './Card'

const rigthContent = (props) => {
  return (
    <div id='right' className=' h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-auto'>
        
        {props.users.map(function(elem,idx){

          return <Card key={idx} id={idx} img={elem.img} tag={elem.tag} />
        }
        )}
        </div>
  )
}

export default rigthContent