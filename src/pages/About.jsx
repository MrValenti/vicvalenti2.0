import React from 'react';
import { WhatVIC } from './../containers';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <div >
      <div className="vic1__about section__padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="vic1__about-content">
            <h1>Hello,</h1>
            <p>
              I have a website design process that uses my marketing and consumer psychology experience, love of code and design expertise to launch your new website in 2 weeks so you can finally cross “build dream website” off your to do list and focus on what you do best - serving your dreamy clients!
            </p>
            <p><strong>Let me help you take your business to the next level and turn your website into a money-maker!</strong></p>
            {/* {<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>} */}
          </div>

          <div className="vic1__about-image">
            {/* <img src={ai} /> */}
            {/* <Box1 /> */}
          </div>
        </motion.div>
      </div>
      <WhatVIC />
    </div>
  )
}

export default About