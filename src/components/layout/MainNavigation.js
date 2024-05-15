import React, { useState } from 'react';
import { Link  } from "gatsby"
import 'bulma/css/bulma.min.css';
import logoImg from "../../images/pubao_pro.png"
import * as classes from "./MainNavigation.module.css"

function MainNavigation() {

  const [isOpen , setIsopen ] = useState(false);
  const toggleMenu = () => {
    setIsopen(isOpen => !isOpen);
  }


  return (
     <nav className="navbar">
        <div className="navbar-brand">
          <Link href='/'>
            <div className={classes.logo}>
              <img className={classes.logoImage} src = {logoImg}/>
              <div className={classes.txt}>TechLog</div>
            </div>
            
          </Link>

          <div onClick={() => toggleMenu()} className= { isOpen? "navbar-burger is-active" : "navbar-burger" } >
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
