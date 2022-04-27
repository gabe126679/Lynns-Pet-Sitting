import React, { useState, useEffect, useLayoutEffect } from 'react';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Form from './pages/Form';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [location.pathname]
  );

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/homes' element={<Homes/>} />
          <Route path='/rentals' element={<Rentals/>}/>         
          <Route path='/contact' element={<Contact/>} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
