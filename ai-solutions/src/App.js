import React from 'react';
// import './App.css';
import { BrowserRouter as Router, isRouteErrorResponse, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ML from './components/pages/ML'
import PSDesign from './components/pages/PSDesign';
import WebDev from './components/pages/WebDev';
// import Dropdown from './Dropdown'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services/ml' element={<ML/>}/>
        <Route path='/services/ps-design' element={<PSDesign/>}/>
        <Route path='/services/web-dev' element={<WebDev/>}/>
      </Routes>
    </Router>
  );
};

export default App;