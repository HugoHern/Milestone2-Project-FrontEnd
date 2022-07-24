// switching to development branch
import './App.css';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Signup from './components/Signup.js'
import DatingCards from './components/DatingCards.js'
import TheirProfile from './components/TheirProfile.js';
import Login from './components/Login'
import Home from './components/Home.js'
import Admin from './components/Admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path='signup' element={<Signup/>}/>
          <Route path='matches' element={<DatingCards/>}/>
          <Route path='profile' element={<TheirProfile/>}/>
          <Route path='admin' element={<Admin />}/>
          <Route path="*" element={<div>ERROR 404 <Link to='/'>GO HOME</Link></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
