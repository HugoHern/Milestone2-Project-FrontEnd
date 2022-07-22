import React, {useState} from "react";
import DatingCard from 'react-tinder-card'
import './DatingCards.css'

const DatingCards = () => {
    //state for temporary data of people.
    const [people, setPeople] = useState([
        {
            name: 'Random Guy', 
            imgUrl: 'boy_pic.jpg'
        },
        {
            name: 'Another Guy',
            imgUrl: 'boy_pic.jpg'
        },
        {
            name: 'Random Girl',
            imgUrl: 'girl_pic.jpg'
        },
        {
            name: "Another Girl",
            imgUrl: 'girl_pic.jpg'
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
        <div className="datingCards">
            <div className="datingCards_container">
                {people.map((person) => (
                    <DatingCard className="swipe" key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen = {() => outOfFrame(person.name)}>
                        <div className='card'>
                     
                            
                                    <iframe width="400" height="400" src="https://www.youtube.com/embed/0bomkgXeDkE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                             
                       
                            <h3>{person.name}</h3>
                        </div>
                    </DatingCard>
                ))}
            </div>
        </div>
    )
}

export default DatingCards
//style={{backgroundImage: `url(${person.imgUrl})`}} 