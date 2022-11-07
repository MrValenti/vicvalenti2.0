import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/munyaradzi.png';

const Menu = () => (
  <>
    <p><a href='#'>Home</a></p>
    <p><a href='#'>About</a></p>
    <p><a href='#'>Testimonials</a></p>
    <p><a href='#'>Contact</a></p>
  </>

);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='vic1__navbar'>
      <div className='vic1__navbar-links'>
        <div className='vic1__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='vic1__navbar-links_container'>
          <Menu />
        </div>
        <div className='vic1__navbar-sign'>
          <p>Sign In</p>
          <button type='buttom'>Sign Up</button>
        </div>
        <div className='vic1__navbar-menu'>
          {toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='vic1__navbar--menu__container scale-up-center'>
              <div className='vic1__navbar--menu__container-links'>
                <Menu />
              </div>
              <div className='vic1__navbar-sign'>
                <p>Sign In</p>
                <button type='buttom'>Sign Up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar;