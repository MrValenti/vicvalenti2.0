import React from 'react';
import { motion } from 'framer-motion';
import './box.css';

const Box1 = () => (
  <div>
    <motion.div
      className='box'
      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
      
    >

    </motion.div>
  </div>
);

export default Box1;