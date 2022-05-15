import {React,useState} from 'react'
import {useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import data from '../../data/db.json'


function TourDetails() {
  let {id} = useParams()
  let answer = data.filter(cityData => cityData.id === id)

  const [show,setShow]=useState(false);
  function handelshow  (){
      
    setShow(!show)
  }

  return (
    <div key={id}>

        <img src={answer[0].image}  className="card__image" alt="" />
         <div className="">
           <div className="card__header">
             <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
             <img className="card__thumb" src={answer[0].image} alt={answer[0].alter} />
             <div className="card__header-text">
               <h3 className="card__title">Name : {answer[0].name} </h3>
               <div className='card__tagline'><h6>ID : {answer[0].id}</h6></div>
               <span className="card__status"> 
               {!show && answer[0].info.substring(0,87) } 
               {show && answer[0].info} 
               <Button variant="info" onClick={handelshow}>{show ? 'See Less' : 'See More'}</Button>
               </span>
             </div>          
           </div>
            
         </div>

    </div>
  )
}

export default TourDetails