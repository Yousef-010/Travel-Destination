import React from 'react'
import '../NavBar/NavBar.css'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function NavBar(props) {
  
 
  return (
    <>  
     <nav>
           <Button   variant="outline-secondary">

           <Link to='/'> HOME </Link>

           </Button>
             
      </nav>
    </>
  )
}

export default NavBar