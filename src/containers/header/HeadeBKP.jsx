import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai-min.png';
import Svgimg from '../../assets/1412284.svg';
import './header.css';
import Box1 from './Box1';
import { motion } from 'framer-motion';

const Header = () => (
  <div className="vic1__header section__padding" id="home">
    <div className="vic1__header-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {<h1 className="gradient__text">Software Developer</h1>}
        <p> I am passionate about building scalable software, progressive apps and creating effective solutions.</p>
        {/* {<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>} */}
      </motion.div>
    </div>

    <div className="vic1__header-image">
      <motion.img
        src={Svgimg}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
      drag
      dragConstraints={{
        right: 20,
        left:-20,
        top: -20,
        bottom: 20
      }}
      whileHover={{
        scale: 1.1
      }}
      whileTap={{
        scale: 0.9
      }}
      />
      {/* <Box1 /> */}
    </div>
  </div>
);

export default Header;
