// import logo from './logo.svg';

import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import TourDetails from './components/TourDetails/TourDetails'


import { Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/city/:id" element={<TourDetails />} />

    </Routes>
    <hr></hr>
    <Footer/>
    </>
  );
}

export default App;
