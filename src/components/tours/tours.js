import './tours.css'
import data from '../../data/db.json';
import Tour from './tour/tour';


function Tours (){

    return (
        <>
         <ul className="cards">
         <Tour data={data} />
         </ul>
        </>
    )}

    

    export default Tours


  //   <ul >
  //  
  // </ul>


  // <div>
  //           <ul >
  //             {
  //               data.map(ele=>{
  //                 return <Tour data={ele} key = {ele.id}/>
  //               })
  //             }
  //           </ul>
  //        </div>