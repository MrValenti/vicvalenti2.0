import React, { useEffect, useState } from "react";
// import people from '../../assets/people.png';
// import ai from '../../assets/ai-min.png';
import Svgimg from '../../assets/1412284.svg';
import './header.css';
import Box1 from './Box1';
import { motion } from 'framer-motion';
import { Brand, CTA, Navbar } from './../../components';



const Header = () => {
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  return (
    <>
      <header className={classes}><Navbar /></header>
    </>
  );

};

export default Header;
