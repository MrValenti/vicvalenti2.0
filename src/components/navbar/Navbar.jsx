import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/munyaradzi.png';
import './navbar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import StickyBox  from 'react-sticky-box';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: -10 }}
      // style={{ position: 'fixed'}}
    >
      <div className="vic1__navbar">
        <div className="vic1__navbar-links">
          <div className="vic1__navbar-links_logo">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={logo}
            />
          </div>

          <div className="vic1__navbar-links_container">
            <motion.p
              whileHover={{ scale: 1.1, color: "#000000" }}
              transition={{ type: 'spring', stiffness: 300 }}
            ><Link to="/">Home</Link>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.1, color: "#000000" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/about">About Me</Link>
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.2, color: "#000000" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link to="/portfolio">Projects</Link>
            </motion.p>
            {/* <motion.p
              whileHover={{ scale: 1.2, color: "#000000" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href="/contact">Contact</a>
            </motion.p> */}
          </div>

        </div>

        <div className="vic1__navbar-sign">
          <motion.button
            className="vic1__navbar-button-border"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/contact">Contact</Link>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)"
            }}
          >
            <Link to="/consulting">Consultation</Link>
          </motion.button>
        </div>
        <div className="vic1__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="vic1__navbar-menu_container scale-up-center">
              <div className="vic1__navbar-menu_container-links">
                <p><a href="/">Home</a></p>
                <p><a href="/about">About Me</a></p>
                <p><a href="/portfolio">Projects</a></p>
                {/* <p><a href="/contact">Contact</a></p> */}
              </div>
              <div className="vic1__navbar-menu_container-links-sign">
                <button className="vic1__navbar-button-border">Contact</button>
                <button type="button">Consultation</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
