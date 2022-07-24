import React from "react";
import { Outlet, Link, Routes, Route } from "react-router-dom";

// LANDING PAGE - buttons to log in or sign up
function Home() {
  return (
    <div>
      <div><Link to="/login">LOG IN</Link></div>

      <div><Link to="/signup">SIGN UP</Link></div>

      <div><Link to="/admin">ADMIN CONTROLS</Link></div>
    </div>
  );
}

export default Home;
