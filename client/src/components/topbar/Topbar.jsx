import React from 'react'
import "./topbar.css"
import { Link, Outlet } from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
    const {user, dispatch} = useContext(Context)
    const LinkColor = {textDecoration: "none", color:"inherit"}
    const PF = "http://localhost:5000/images/"

const handleLogout = () =>{
dispatch({type: "LOGOUT"})
}

    return (
        <>
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'><Link to="/" style={LinkColor}> HOME </Link></li>
                   <li className='topListItem'><Link to="/about" style={LinkColor}> ABOUT </Link></li>
                    <li className='topListItem'><Link to="/contact" style={LinkColor}>CONTACT</Link></li>
                   <li className='topListItem'><Link to="/write" style={LinkColor}>WRITE</Link></li>
                    <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
               {user ? <Link to="/settings"><img 
                className='topImage'
                src={PF+user.profilePicture} alt="" /></Link> : 
                (<ul className='topList'><li className='topListItem'><Link to="/login" style={LinkColor}> LOGIN </Link></li>
                <li className='topListItem'><Link to="/register" style={LinkColor}> REGISTER </Link></li></ul>)
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
        <Outlet></Outlet>
                </>
    )
}

export default Topbar
