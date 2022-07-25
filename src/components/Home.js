import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div><Link to="/login">LOG IN</Link></div>

      <div><Link to="/signup">SIGN UP</Link></div>
    </div>
  );
}

export default Home;
