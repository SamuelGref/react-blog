import './sidebar.css'


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/202844438_4372144286130289_864136507009950365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mRPI2uOIdZkAX-cHpqN&tn=pAPKX4fpfFrNR502&_nc_ht=scontent-lga3-1.xx&oh=175ac9dc29e77af6810424c1a7014547&oe=615C82F7" alt="" />
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
