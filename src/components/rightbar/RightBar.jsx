import "./rightbar.scss"

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <span>John Doe</span>
            </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Dismiss</button>
          </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" alt="profile" />
              <span>Taylor Swift</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
          <span>1 Minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <p>
                <span>John Doe</span> liked a post
              </p>
            </div>
          <span>1 Minute ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <p>
                <span>John Doe</span> liked a comment
              </p>
            </div>
          <span>1 Minute ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="profile" />
              <div className="online"/>
                <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar