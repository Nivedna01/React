import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [idx, setIdx] = useState(1)

   async function  getData()
    {
        const response= await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=10`)
        setData(response.data)
    }

    useEffect(() => {
    
        getData() 
    },[idx])
    

    let printData = <h3 className='text-gray-400 text-xs absolute left-1/2 top-1/2' >loading......</h3>

    if( data.length > 0)
    {
      printData = data.map( function(elem,idx)
    {
       return <div key={idx}>
          <a href={elem.url}>
            <div className='h-50 w-55  overflow-hidden rounded-2xl '> 
          <img className='h-full object-cover w-full ' src={elem.download_url} alt="" />
       </div>
            <h2 className='text-lg'>{elem.author}</h2>
          </a>
       </div>
    })
    }

  return (
    <div  className='bg-black  min-h-screen  overflow-auto  p-8 text-white'>

      {/* <button onClick={getData}
      className=' bg-white  text-black p-4 rounded m-4 active:scale-95 '
      > Get data</button> */}

      <div className='flex h-[82%] flex-wrap  gap-5 p-3' >
        {printData}
      </div>

      <div className='flex justify-center items-center gap-5 p-4 '>

        <button
        style={{ opacity: idx == 1 ? 0.6 : 1 }}
         onClick={ 
         () => {
           if( idx>1)
           {
             setIdx(idx-1)
           setData([])
           }

         }
      }
       className=' bg-green-300 text-m w-30 cursor-pointer font-bold active:scale-95 p-6 rounded-2xl '> Prev</button>

      <h4>Page {idx}</h4>

      <button  onClick={ 
         () => {
          
            setIdx(idx+1)
             setData([])
           
      }
    }
       className=' bg-green-300 text-m w-30  font-bold p-6 active:scale-95 rounded-2xl '>Next</button>
      </div>
    </div>



    
  )
}

export default App