import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setfirst] = useState(0)

  // function changeNum()
  // {
  //   setfirst(10)
  // }
  
    // function inc()
    // {
    //     setfirst(num+1);
    // }
    //  function dec()
    // {
    //     setfirst(num-1);
    // }
    //  function jumpBy10()
    // {
    //     setfirst(num+10);
    // }
    function incBy3()
    {
        // inc only 1
        // setfirst(num+1);
        // setfirst(num+1);
        // setfirst(num+1);

        //batch update
        setfirst(prev=>(prev+1));
        setfirst(prev=>(prev+1));
        setfirst(prev=>(prev+1));
    }

  return (
    <div>

      {/* <h1>Value of x is {num}</h1>
      <button onClick={changeNum}> Increase value </button> */}

        {/* <h1>{num}</h1>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>
        <button onClick={jumpBy10}>Jump by 10</button> */}

          <h1>{num}</h1>
        <button onClick={incBy3}>inc by 3</button>
    </div>
  )
}

export default App