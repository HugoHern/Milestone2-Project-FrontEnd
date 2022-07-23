// switching to development branch
import './App.css';
import { useEffect, useState, Fragment } from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Signup from './components/Signup.js'
import Header from './components/Header.js';
import DatingCards from './components/DatingCards.js'
import TheirProfile from './components/TheirProfile';
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>LOG IN OR SIGN UP</div>}/>
          <Route path="/login" element={<Login />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='matches' element={<DatingCards/>}/>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
