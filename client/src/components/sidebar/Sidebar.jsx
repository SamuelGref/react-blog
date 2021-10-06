import './sidebar.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'



const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);

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
                    {cats.map((c) => (
                        <Link to ={`/?cat=${c.name}`} className='link'>
                            <li className="sidbarListItems">{c.name}</li>
                        </Link>

                    ))}


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
