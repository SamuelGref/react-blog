import "./singlePost.css";


const SinglePost = () => {

    return (
        <div className='singlePost'>
            <div className="singlePostWraper">
                <img className="singlePostImg" src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </div>
            <h1 className="inglePostTitle">
                Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className=" singlePostIcon far fa-edit"></i>
                    <i className=" singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'> Author: <b>Safak</b></span>
                <span className='singlePostDate'> 1 hour ago </span>
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto recusandae repellendus omnis quo vel repudiandae, harum libero accusamus. Ducimus labore necessitatibus atque, cupiditate perspiciatis aliquam. Non deserunt laboriosam vero sunt?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto recusandae repellendus omnis quo vel repudiandae, harum libero accusamus. Ducimus labore necessitatibus atque, cupiditate perspiciatis aliquam. Non deserunt laboriosam vero sunt?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto recusandae repellendus omnis quo vel repudiandae, harum libero accusamus. Ducimus labore necessitatibus atque, cupiditate perspiciatis aliquam. Non deserunt laboriosam vero sunt?
                
            </p>
        </div>
    );
}

export default SinglePost;