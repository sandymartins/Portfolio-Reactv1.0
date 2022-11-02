import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavBarElements';
import './NavBar.css';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Sandy Martins</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Skills
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Projects
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>CV</NavBtnLink>
        </NavBtn>

        {/* ADICIONAR ICONES*/}
        
      </Nav>
    </>
  );
};

export default Navbar;