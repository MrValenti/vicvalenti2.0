import React from 'react';
import './Consulting.css';
import { motion } from 'framer-motion';

const Consulting = () => {
    return (
        <div className="vic1__portfolio section__padding">
            <motion.div
                className="vic1__consulting-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {/* https://www.scnsoft.com/services/mobile-app-development/consulting */}
                <h1>Website Development Services</h1>
                <p>Keeping abreast of the evolving web technologies, we have been continuously shaping our services to meet the growing demand for fast, secure and interactive websites:</p>
                <p>Full-cycle website design and development</p>
                <p>Redesign</p>
                <p>Web application development and integration</p>
                <p>Migration to cloud</p>
                <p>Maintenance and support</p>
                <p>Mobile-driven development</p>
                <h1>Mobile Consulting</h1>
                <p>Mobile app development consulting aims at providing professional guidance in mobile development initiatives. With +7 years in web and mobile application development, I advise on device compatibility, performs app audits, plans modernization and from-scratch development of new competitive apps.</p>
                <p>What's more, we provide end-to-end mobile project implementation, including mobile design, mobile app development, mobile testing, and mobile app maintenance & sup</p>
                <h1>Mobile Departments</h1>
                <p>IOS</p>
                <p>Android</p>
                <p>React Native</p>
                <p>CMS</p>
                <p>XAMARIN</p>
                <h1>Service Scope of Mobile App Development Consulting</h1>
                <p>If you want to improve your existing mobile app or develop a completely new one, an expert review may be a good place to start. ScienceSoft’s mobile app consulting specialists offer a wide range of services: from feasibility study to code reuse analysis for your mobile and web apps.</p>
                <h1>Expertise in Leading Mobile Techs</h1>
                <p>Our mobile consulting services help you decide on your target OS and settle for a specific mobile development platform. We know what native and cross-platform development tools are capable of and always suggest the most fitting option based on an app’s functional requirements and available budget.</p>
                <h1>Benefitable Approach to Mobile App Consulting</h1>
                <p>Prototype development</p>
                <p>Research-based UX and UI design</p>
                <p>Adherence to security standards</p>
                <p>Mobile API development</p>
                <h1>Mobile App Consulting Service Options</h1>
                <p>Mobile app launch</p>
                <ul>
                    <li>Feasibility studies and market research.</li>
                    <li>Cost breakdown and optimization.</li>
                    <li>Architecture and technology choice.</li>
                    <li>UX and UI design mockups.</li>
                    <li>Integration planning.</li>
                </ul>
                <p>Mobile app modernization</p>
                <ul>
                    <li>Roadmap planning.</li>
                    <li>Backlog analysis.</li>
                    <li>Feature prioritization.</li>
                    <li>UX/UI redesign plan.</li>
                    <li>Architecture redesign plan.</li>
                    <li>Code refactoring plan.</li>
                    <li>Re-integration plan.</li>
                </ul>
                <p>Mobile app audit</p>
                <ul>
                    <li>UX and UI audit.</li>
                    <li>Code audit.</li>
                    <li>Security audit.</li>
                    <li>Compliance audit.</li>
                    <li>Device compatibility audit.</li>
                    <li>Platform compatibility audit.</li>
                </ul>
            </motion.div>
        </div>

    )
}

export default Consulting