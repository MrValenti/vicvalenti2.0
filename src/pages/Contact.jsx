import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div >
      <div className="vic1__about section__padding">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1  }}
          transition={{ duration: 0.4 }}
        >
          <div className="vic1__about-content">
            <h1
            >
              Looking to work together?
            </h1>

            <p>Great! Click here to schedule a complementary discovery call and secure your design date! </p>
            <p>If these times do not work for you, hit me up via email hello@vicvalenti.co.za with some alternate times and I will respond within 2 business days to line it up. </p>
          </div>
        </motion.div>

        <div className="vic1__about-image">
          {/* <img src={ai} /> */}
          {/* <Box1 /> */}
        </div>
      </div>
    </div>
  )
}

export default Contact;