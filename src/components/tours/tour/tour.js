
import React from 'react'
import {Link} from 'react-router-dom'


export default function Tour(props) {
   
 return props.data.map(ele => {

    return (
   
        
      <li key={ele.id}>

     <Link  to={`/city/${ele.id}`}className="card">
       <img src={ele.image}  className="card__image" alt="" />
       <div className="card__overlay">
         <div className="card__header">
           <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
           <img className="card__thumb" src={ele.image} alt={ele.alter} />
           <div className="card__header-text">
             <h3 className="card__title">{ele.name}</h3>
             <span className="card__status">Click me too see more information </span>
           </div>          
         </div>
         <p className="card__description"></p>
       </div>
     </Link>

     </li> 

  
)

  })

  
}
