import React, { useState } from 'react';
import { Link  } from "gatsby"
import 'bulma/css/bulma.min.css';
import logoImg from "../../images/pubao_pro.png"

function MainNavigation() {

  const [isOpen , setIsopen ] = useState(false);
  const toggleMenu = () => {
    setIsopen(isOpen => !isOpen);
  }


  return (
     <nav className="navbar">
        <div className="navbar-brand">
          <div className='navbar-item'>
            <Link href='/'>
              <figure className="image is-32x32">
                <img className="is-rounded" src = {logoImg}/>
              </figure>
              <div className='text'>TechLog</div>
            </Link>
          </div>

          <div onClick={() => toggleMenu()} 
          className= { isOpen? "navbar-burger is-active" : "navbar-burger" } >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className= { isOpen? "navbar-menu is-active" :  "navbar-menu"  }>
          <div className="navbar-start">
            <Link className='navbar-item' href='/about'>About</Link>
            <Link className='navbar-item' href='/blog'>Blog</Link>
            <Link className='navbar-item' href='/contact'>Contact</Link> 
          </div>
        </div>
      </nav>
  );
}

export default MainNavigation;
