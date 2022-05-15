import './header.css';
import NavBar from '../NavBar/NavBar';
import {useState} from 'react'

import { useParams } from 'react-router-dom';

function Header (){


    return (
        <>
        <NavBar   />
        <h1>  Travel Distenation System </h1>
       
        <hr></hr>


        </>
    )}

    export default Header