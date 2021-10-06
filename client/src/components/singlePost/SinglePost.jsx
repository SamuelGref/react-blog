import "./singlePost.css";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect  } from "react";
import { Link } from "react-router-dom";


const SinglePost = () => {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
          const res = await axios.get("/posts/" + path);
          setPost(res.data);
          
        };
        getPost();
      }, [path]);
    return (
        <div className='singlePost'>
            <div className="singlePostWraper">
                {post.photo && (
                     <img className="singlePostImg" src={post.photo} alt="" />
                )}
               
            </div>
            <h1 className="inglePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className=" singlePostIcon far fa-edit"></i>
                    <i className=" singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'> 
                Author:  
                <Link to= {`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
                </Link>
                </span>
                <span className='singlePostDate'> {new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='singlePostDesc'>{post.desc}
                
            </p>
        </div>
    );
}

export default SinglePost;
