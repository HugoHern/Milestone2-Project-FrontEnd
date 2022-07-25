import React, {useState} from "react";
import DatingCard from 'react-tinder-card'
import Header from './Header.js';
import './DatingCards.css'

const DatingCards = () => {
    //state for temporary data of people.
    const [people] = useState([
        {
            name: 'Random Guy', 
            vidUrl: 'https://www.youtube.com/embed/0bomkgXeDkE'
        }
    ])

    /* map through the state or data from the people object. Passing in helper functions to the Dating Card component for swiping animations with help of react-tinder*/
    return (
      <div>
        <Header />
        <div className="datingCards">
          <div className="datingCards_container">
            {people.map((person) => (
              <DatingCard
                className="swipe"
              >
                <div className="card">
                  <iframe
                    width="300"
                    height="400"
                    src={person.vidUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                  <div className="photos">
                    <img
                    src={"https://place-puppy.com/100x100"}
                    alt="potential match photo1"
                    height={100}
                    width={100}
                    />
                    <img
                    className="photo"
                    src={"https://place-puppy.com/100x100"}
                    alt="potential match photo2"
                    height={100}
                    width={100}
                    />
                  </div>
                  <h2>{person.name}</h2>
                </div>
              </DatingCard>
            ))}
          </div>
        </div>
      </div>
    );
}

export default DatingCards
//style={{backgroundImage: `url(${person.imgUrl})`}} 