import React, { useState } from "react";
import DatingCard from "react-tinder-card";
import Header from "./Header.js";
import "./YourProfile.css";
import YourHeader from "./YourHeader.js";

const YourProfile = () => {
  //state for temporary data of people.
  const [people] = useState([
    {
      name: "Random Guy",
      vidUrl: "https://www.youtube.com/embed/0bomkgXeDkE",
      photo1: "boy_pic.jpg",
      photo2: "girl_pic.jpg",
    },
  ]);

  /* map through the state or data from the people object. Passing in helper functions to the Dating Card component for swiping animations with help of react-tinder*/
  return (
    <div>
      <Header />
      <div className="datingCards">
      <YourHeader />
        <div className="datingCards_container">
          {people.map((person) => (
            <DatingCard className="swipe">
              <div className="card">
              <h2>{person.name}</h2>
                <iframe
                  width="300"
                  height="400"
                  src={person.vidUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <input type="file" />
                <div className="photos">
                  <img
                    class='photo'
                    src={"https://place-puppy.com/100x100"}
                    alt="potential match photo1"
                    height={100}
                    width={100}
                  />
                  <input type="file" />
                  <img
                    class='photo'
                    src={"https://place-puppy.com/100x100"}
                    alt="potential match photo2"
                    height={100}
                    width={100}
                  />
                  <input type="file" />
                  {/* Put bio here */}
                </div>
              </div>
            </DatingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
//style={{backgroundImage: `url(${person.imgUrl})`}}
