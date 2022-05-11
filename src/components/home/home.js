import Header from '../header/header';
import Tours from '../tours/tours';
import Footer from '../footer/footer';

import data from '../../data/db.json';



function Home (){
    return (
        <>
        <Header/>
        {
              data.map((Element )=>{
                 
            return <Tours TourName = {Element.name} Tourimage = {Element.image} alter={Element.id
            }  />
              })
    
         }
       
        <Footer/>
        </>
    )
}

export default Home