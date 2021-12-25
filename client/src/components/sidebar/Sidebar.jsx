import React, { useEffect, useState } from 'react';
import "./sidebar.css"
import axios from "axios"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
const [cats, setCats] = useState([])

useEffect(() =>{
        const getCats = async() =>{
const res = await axios.get("/categories")
setCats(res.data)
        }
        getCats()
},[setCats])

  return (
    <div className='sidebar'>
      <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img className="sidebarImage" src="https://images.pexels.com/photos/7700282/pexels-photo-7700282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Necessitatibus suscipit quaerat minus simil
          </p>
      </div>
      <div className="sidebarItem">
          <span className='sidebarTitle'>CATEGORIES</span>
         <ul className="sidebarList">
             {cats.map((cat) => (<li className="sidebarListItem">
                <Link className='link' to={`/?cat=${cat.name}`}>{cat.name}</Link>
             </li>))}
         </ul>
      </div>
      <div className="sidebarItem">
      <span className='sidebarTitle'>FOLLOW US</span>
<div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
</div>
      </div>
    </div>
  );
}

export default Sidebar;
