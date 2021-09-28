import "./topbar.css" 

const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                   <li className="topListItem">Home</li> 
                   <li className="topListItem">About</li>
                   <li className="topListItem">Contact</li>
                   <li className="topListItem">Write</li>
                   <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                className="topImg"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/202844438_4372144286130289_864136507009950365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mRPI2uOIdZkAX-cHpqN&tn=pAPKX4fpfFrNR502&_nc_ht=scontent-lga3-1.xx&oh=175ac9dc29e77af6810424c1a7014547&oe=615C82F7" alt=""/>
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
