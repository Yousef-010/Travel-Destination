// import logo from './logo.svg';

import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';


import { Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
