import './sidebar.css'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam unde doloribus ipsum cum aspernatur?
                </p>
            </div>
            <sidebar className="sidebarItem">
                <span className="sidebarTitle">catagories</span>
                <ul className="sidbarList">
                    <li className="sidbarListItems">Life</li>
                    <li className="sidbarListItems">Style</li>
                    <li className="sidbarListItems">Music</li>
                    <li className="sidbarListItems">Sport</li>
                    <li className="sidbarListItems">Tech</li>
                    <li className="sidbarListItems">Cinema</li>
                </ul>
                <div className="sidebarItem">
                    <span className="sidebarTitle">Follow us</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
                </div>
            </sidebar>
        </div>
    )
}

export default Sidebar
