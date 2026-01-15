import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div>
         <div className="card">

        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark  size={18}/>  </button>
        </div>

        <div className="mid">
          <h3>{props.company} <span>{props.post}</span></h3>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <div className="bottom">
              <div>
                <h3>{props.pay}</h3>
                <p>{props.location}</p>
              </div>
              <button>Apply Now </button>
        </div>
    
      </div>
    </div>
  )
}

export default card