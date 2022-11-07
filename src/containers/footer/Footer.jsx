import React from 'react';
// import gpt3Logo from '../../logo.svg';
import { BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => (
  <div className="vic1__footer section__padding">
    {/* {<div className="vic1__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>} */}

    {/* <div className="vic1__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    {/* <div className="vic1__footer-links">
      <div className="vic1__footer-links_logo">
        {/* <img src={gpt3Logo} alt="vic1_logo" /> 
      </div>
      <div className="vic1__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="vic1__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="vic1__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div> */}
    <div className="vic1__footer-links">
      
      <Link><BsLinkedin color="#000" size={27} />&nbsp;<BsTwitter color="#000" size={27}  />&nbsp;<BsInstagram color="#000" size={27} /></Link>
      <Link to="https://github.com/MrValenti" target="_blank"><BsLinkedin color="#000" size={27} />&nbsp;</Link>
    </div>
    <div className="vic1__footer-copyright">
      <p>@2022 •●• Victor M Valenti •●• All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
