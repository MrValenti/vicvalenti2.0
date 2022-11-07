import React from 'react';
import { motion } from 'framer-motion';
import './box.css';

const boxVariant = {
  hidden: {
    // x: "-100vw"
    y: "-100vw"
  },
  visible: {
    // x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren"
    }
  }
}

const listVariant = {
  hidden: {
    // x: -10,
    y: -10,
    opacity: 0
  },
  visible: {
    // x: 0,
    y: 0,
    opacity: 1,
    staggerChildren: 0.2
  }
}

const numbers = [1, 2, 3, 4, 5];

const Box3 = () => (

  <div>
    <motion.div
      className="box3"
      variants={boxVariant}
      animate="visible"
      initial="hidden"
    // animate={{x: 0}}
    // initial={{x: -100}}
    >
      {numbers.map(box => {
        return (
          <motion.li className="boxItem"
            variants={listVariant}
          >

          </motion.li>
        )
      })}

    </motion.div>
  </div>
);

export default Box3;