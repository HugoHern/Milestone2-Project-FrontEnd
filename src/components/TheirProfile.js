import React, {useState} from "react";
import DatingCards from "./DatingCards";
import PersonIcon from '@material-ui/icons/Person'
import IconButton  from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum'
import { FiberPinRounded } from "@material-ui/icons";

function TheirProfile() {
    //state for temporary data of people.
    const [people, setPeople] = useState([
        {
            name: 'Random Guy', 
            imgUrl: 'boy_pic.jpg',
            secImg: 'logo512.png',
            thirdImg: 'girl_pic.jpg'
        }
    ])
 
    return (
        <div className="TheirProfile">
            {people.map((person) => (
                        <div key={1}style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                            <h3>{person.name}</h3>
                        </div>
                ))}
            {people.map((person)=> (
                <div key={2} style={{backgroundImage: `url(${person.secImg})`}} className='card'>
                </div>
            ))}
            {people.map((person)=> (
                <div key={3} style={{backgroundImage: `url(${person.thirdImg})`}} className='card'>
                </div>
            ))}
                <h4>Bio: lorem Ipsum</h4>
        </div>
    )
} 

export default TheirProfile;