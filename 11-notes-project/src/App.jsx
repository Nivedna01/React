import React, {  useState } from 'react'

export const App = () => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    const [task, setTask] = useState([])
   function submitHandler(e)
  {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push( {title , details})
    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }

  function DeleteNode(idx)
  {
    const copyTask = [...task];
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  return (

    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={ (e) => {
        submitHandler(e)
      }}
      className='flex lg:w-1/2 flex-col  p-10 gap-5' >
        
         <h2 className='text-4xl font-bold'>Add Notes</h2>
          <input 
          type="text"
          placeholder='Enter Notes Heading'
          className=' px-3 py-3 font-medium w-full border-2 rounded'
          value={title}
          onChange={ (e) => setTitle(e.target.value)}
           />
           <textarea 
           type="text"
           placeholder='Write details'
           className='h-35 px-2 font-medium py-4 w-full border-2 rounded'
            value={details}
           onChange={ (e) => setDetails(e.target.value)}
           />

           <button className='bg-white active:bg-gray-300 font-medium w-full rounded py-3 text-black'>Add Notes</button>
      
      </form>

      <div className='lg:border-l-2 p-10 lg:w-1/2'>

        <h2 className='text-4xl font-bold'>Recent Notes</h2>
        
        <div className='flex flex-wrap items-start justify-start  overflow-auto h-full  mt-5  gap-5'>
          
          {task.map( function (elem , idx) {
            
            return <div key={idx} className='flex flex-col justify-between h-52 w-40 p-4 rounded bg-white text-black'>
  
              <div>
                <h3 className='text-lg font-bold '>{elem.title}</h3>
              <p className=' leading-tight font-mmedium text-gray-500 mt-2 text-sm'>{elem.details}</p>
              </div>
              
              <div>
                <button onClick={() => DeleteNode(idx)} className='bg-red-500 rounded w-full cursor-pointer active:scale-95 py-1 text-xs font-bold text-white '>Delete</button>
              </div>

          </div>
          })}
          

        </div>
      </div>

    </div>
  )
}
export default App
