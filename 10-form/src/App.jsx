import React from 'react'
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('')
  

  function submitHandler(e)
  {
    e.preventDefault();
    console.log("submitted by" ,title)
    setTitle('')
  }
  return (

    <form onSubmit={ (e) => {
       submitHandler(e)
    }}>
      <input type="text "
       placeholder='Enter your name'
       value={title}
       onChange={ (el)=>{
         setTitle(el.target.value)
       }}
       />
      <button>Submit</button>
    </form>
  )
}

export default App