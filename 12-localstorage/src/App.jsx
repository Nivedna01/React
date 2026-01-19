
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // localStorage.setItem('user', 'Nivedna')
  // localStorage.setItem('age', '20')

  // const name = localStorage.getItem('user')
  // const age = localStorage.getItem('age')

  // console.log( name,age)

  // const user1 = {
  //   userName : 'Nivedna',
  //   gender : 'Female' ,
  //   city :'Hoisharpur'
  // }

  // localStorage.setItem('user1' , JSON.stringify(user1))

  // const userdata = localStorage.getItem('user1')

  // console.log(userdata)
  // console.log(JSON.parse(userdata))

    const [data, setData] = useState([])
   const  getData = async () => {

    // by fetch
    // const response = await fetch('https://picsum.photos/v2/list');
    // const data = await response.json()

    // console.log(data);
      
    //by axios
    const response = await axios('https://picsum.photos/v2/list')
    // console.log(response.data)
    setData(response.data)
   }
  

  return (
    <div>
        <button onClick={ getData}> get data</button>
         <div>
          {data.map(function(elem ,idx)
         {
           return <h1>hello ,{elem.author} {idx}</h1>
         }) }
         </div>
    </div>
  )
}

export default App