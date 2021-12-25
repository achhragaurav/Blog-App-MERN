import React from 'react';
import "./header.css"
const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
          <span className='headerTitleSm'>React and Node</span>
          <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src="https://images.pexels.com/photos/209798/pexels-photo-209798.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
    </div>
  );
}

export default Header;
