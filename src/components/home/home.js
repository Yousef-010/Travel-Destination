import Tours from '../tours/tours';
import data from '../../data/db.json';

function Home (){
    return (
        <>

        {
              data.map((Element )=>{
            return <Tours TourName = {Element.name} Tourimage = {Element.image} alter={Element.id} />
              })

         }      
        
        </>
    )
}

export default Home