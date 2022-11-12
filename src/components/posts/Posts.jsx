import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {

  const posts = [
    {
        id: 1,
        name: "Steven Andrea",
        userId: 1,
        profilePic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img: "https://images.pexels.com/photos/13912832/pexels-photo-13912832.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates quibusdam quisquam ratione quos fuga!"
    },
    {
        id: 2,
        name: "Amora",
        userId: 2,
        profilePic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img: "https://images.pexels.com/photos/8342074/pexels-photo-8342074.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, possimus."
    },
    {
        id: 3,
        name: "Will Smith",
        userId: 3,
        profilePic: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img: "https://images.pexels.com/photos/13920607/pexels-photo-13920607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
];

  return (
    <div className="posts">
      {posts.map(post =>(
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts