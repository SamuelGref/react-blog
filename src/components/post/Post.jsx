import './post.css'

const Post = () => {
    return (
        <div className="post">
        <div className='postImg'>
           <img src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt=""/>
           <div className="postInfo">
               <div className="postCats">
                   <span className="postcat">Music</span>
                   <span className="postcat">Life</span>
               </div>
               <span className="postTitle">Lorem ipsum, dolor sit amet </span>
               <hr/>
               <span className="postDate">1 hour ago</span>
           </div>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae sit in rerum itaque, harum, velit animi nisi veritatis dignissimos asperiores, culpa doloribus obcaecati cum aut voluptate vel sequi explicabo?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vitae sit in rerum itaque, harum, velit animi nisi veritatis dignissimos asperiores, culpa doloribus obcaecati cum aut voluptate vel sequi explicabo?
        </p>
        </div>
    )
}

export default Post
