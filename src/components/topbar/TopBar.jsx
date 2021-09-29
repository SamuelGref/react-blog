import { Link } from 'react-router-dom'
import "./topbar.css"


const TopBar = () => {
    const user = true;

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
                    <li className="topListItem">
                        <Link className='link' to='/'>HOME</Link>
                    </li>
                    <li className="topListItem"> <Link className='link' to='/about'>ABOUT</Link></li>
                    <li className="topListItem"> <Link className='link' to='/contact'>CONTACT</Link></li>
                    <li className="topListItem"> <Link className='link' to='/write'>WRITE</Link></li>
                    <li className="topListItem">
                        {user && 'LOGOUT'}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/202844438_4372144286130289_864136507009950365_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=mRPI2uOIdZkAX-cHpqN&tn=pAPKX4fpfFrNR502&_nc_ht=scontent-lga3-1.xx&oh=175ac9dc29e77af6810424c1a7014547&oe=615C82F7" alt="" />
                    ) : (
                            <ul className='topList'>
                                <li className="topListItem">
                                    <Link className='link' to='/login'>LOGIN</Link>
                                </li>
                                <li className="topListItem">
                                    <Link className='link' to='/register'>REGISTER</Link>
                                </li>
                            </ul>
                        )
                }

                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar
