import React from 'react'

const Card = (props) => {
  return (
     <div className="card">
        <img src={props.img} alt="" />
        <h1> {props.user} Thakur {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum at ratione quibusdam voluptatum odio veniam illo omnis ipsa modi ad?</p>
        <button>view Profile</button>

        
      </div>
  )
}

export default Card