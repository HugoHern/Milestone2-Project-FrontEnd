import { render } from "@testing-library/react";
import React from "react";

import "./Signup.css";

function Signup() {

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // Compare user info
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Create Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Create Password</label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
        <div className="login-form">
        <div className="title">Sign up</div>
            {renderForm}
        </div>
        
    </div>
    

  )
}

export default Signup;