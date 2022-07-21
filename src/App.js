// switching to development branch
import './App.css';
import { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import DatingCards from './components/DatingCards.js'
import TheirProfile from './components/TheirProfile';

function App() {

  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
      <Link to ="/TheirProfile">
        <DatingCards />
      </Link>

      <Routes>
        <Route path="/TheirProfile" element = {<TheirProfile />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
