import React from "react";
import { Link } from "react-router-dom";

import "./DataCollection.css";

function DataCollection() {

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
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="input-container">
          <label>Bio</label>
          <input type="text" name="bio" />
        </div>
        <div className="input-container">
            <label>What city are you located in?</label>
            <input type="text" name="city" required />
        </div>
        <div className="button-container">
            <Link to="/matches">
                <input type="submit" />
            </Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
        <div className="login-form">
        <div className="title">Tell us about YOU!</div>
            {renderForm}
        </div>
        
    </div>
    

  )
}

export default DataCollection;
