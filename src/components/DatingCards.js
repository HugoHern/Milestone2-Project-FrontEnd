import React, {useState} from "react";
import DatingCard from 'react-tinder-card'
import { Link } from "react-router-dom";
import Header from './Header.js';
import './DatingCards.css'
import IconButton  from "@material-ui/core/IconButton";
import DetailsIcon from '@material-ui/icons/Details'

const DatingCards = () => {
    //state for temporary data of people.
    const [people] = useState([
        {
            name: 'Random Guy', 
            vidUrl: 'https://www.youtube.com/embed/0bomkgXeDkE'
        },
        {
            name: 'Another Guy',
            vidUrl: 'https://www.youtube.com/embed/0bomkgXeDkE'
        },
        {
            name: 'Random Girl',
            vidUrl: 'https://www.youtube.com/embed/3zgFRFom6uA'
        },
        {
            name: "Another Girl",
            vidUrl: 'https://www.youtube.com/embed/3zgFRFom6uA'
        }
    ])

    //helper functions to use with tinder library
    //directions tells the app which direction the user swiped, and nametodelete will be used to remove from screen
    const swiped = (direction, nameToDelete) => {
        console.log('receiving' + nameToDelete)
    }
    //keeps track of what person person has left the screen
    const outOfFrame = (name) => {
        console.log(name + 'left the screen!')
    }

    /* map through the state or data from the people object. Passing in helper functions to the Dating Card component for swiping animations with help of react-tinder*/
    return (
      <div>
        <Header />
        <div className="datingCards">
          <div className="datingCards_container">
            {people.map((person) => (
              <DatingCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
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

                  <h2>{person.name}</h2>
                  <IconButton>
                    <Link to="/match">
                      <DetailsIcon fontSize="large" className="details_icon" color="white" />
                    </Link>
                  </IconButton>
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