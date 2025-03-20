import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <a href="mailto:ivelisbecker@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={50} />
            </a>
            <a href="https://www.github.com/I-0110" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} />
            </a>
            <a href="https://www.linkedin.com/in/ivelis-becker" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} />
            </a>
            <a href="https://www.linkedin.com/in/ivelis-becker" target="_blank" rel="noopener noreferrer">
                <FaFileDownload size={50} />
            </a>
        </div>
    );
};

export default Contact;