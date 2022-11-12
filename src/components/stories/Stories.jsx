import { useContext } from "react";
import "./stories.scss";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)
    
    const stories = [
        {
            id: 1,
            name: "Steven Andrea",
            img: "https://images.pexels.com/photos/13912832/pexels-photo-13912832.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 2,
            name: "Amora",
            img: "https://images.pexels.com/photos/8342074/pexels-photo-8342074.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 3,
            name: "Will Smith",
            img: "https://images.pexels.com/photos/13920607/pexels-photo-13920607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "George Albert",
            img: "https://images.pexels.com/photos/7132406/pexels-photo-7132406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePicture} alt="story-thumb" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="story-thumb" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories