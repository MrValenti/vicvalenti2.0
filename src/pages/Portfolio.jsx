import React from 'react';
import { motion } from 'framer-motion';
import './portfolio.css';
// import Box3 from '../containers/header/Box3';
import Projects from '../components/projects/Projects';

const Portfolio = () => {
    return (
        <div >
            <div className="vic1__portfolio section__padding">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="vic1__portfolio-content">
                        <h1>
                            My Projects
                        </h1>

                        <p>Great! Click here to schedule a complementary discovery call and secure your design date! </p>
                        <p>&nbsp;</p>
                    </div>
                </motion.div>

                <div className="vic1__portfolio-image">
                    {/* <img src={ai} /> */}
                    {/* <Box1 /> */}
                </div>
                <Projects />
                {/* <Box3 /> */}
            </div>

        </div>
    )
}

export default Portfolio;