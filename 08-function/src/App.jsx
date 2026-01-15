import React from 'react'

const App = () => {

    // function inputChanging(val)
    // {
    //   console.log(val)
    // }

    function pageScrolling(val)
    {
      if(val>0)
        console.log("downwards")
      else
        console.log("upwards")
    }

  return (
    <div>

      {/* <button onClick={ function() {
        console.log("Clicked")
      }}>
         click me</button> */}

         {/* <input onChange={ function(elem)
          {
            inputChanging(elem.target.value)
          }
         }
         type='text' placeholder='Enter your name'/> */}


         <div onWheel={ (elem) => {
           pageScrolling(elem.deltaY)
         }}>
          <div className="page1"></div>
          <div className="page2"></div>
         </div>

         
    </div>
  )
}

export default App