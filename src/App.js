// switching to development branch
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup.js";
import DatingCards from "./components/DatingCards.js";
import TheirProfile from "./components/TheirProfile.js";
import Chatroom from "./components/Chatroom";
import Login from "./components/Login";
import Home from "./components/Home.js";
import YourProfile from "./components/YourProfile.js";
import DataCollection from "./components/DataCollection";
import YourEdit from "./components/YourEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="data" element={<DataCollection />} />
          <Route path="matches" element={<DatingCards />} />
          <Route path="match" element={<TheirProfile />} />
          <Route path="chat" element={<Chatroom />} />
          <Route path="profile" element={<YourProfile />} />
          <Route path="edit" element={<YourEdit />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
