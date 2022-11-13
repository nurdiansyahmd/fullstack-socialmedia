import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    
    const comments =[
       { 
            id: 1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum aliquam nostrum cum libero?",
            name: "Steven andrea",
            userId: 1,
            profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, beatae saepe.",
            name: "amora",
            userId: 2,
            profilePicture: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            name: "Will Smith",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
            userId: 3,
            profilePicture: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePicture} alt="profile-thumb" />
            <input type="text" placeholder="write a comment " />
            <button>Send</button>
        </div>

        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="profile-thumb" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">2 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments