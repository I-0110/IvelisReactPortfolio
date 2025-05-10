import React from "react";
import me from "../../public/bye.mp4";

const Contact = () => {
    return (
        <div className="contact" style={{ display: "flex", alignItems: "flex-start" }}>
            <video
                src={me} autoPlay loop muted
                alt="Profile Picture"
                style={
                    { 
                        width: "300px",
                        borderRadius: "20px 10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        marginLeft: "20px",
                        objectFit: "contain",
                    }
                }
            ></video>
        <div style={{ maxWidth: "600px", margin: "20px", }}>
            <h2>Contact Me</h2>
            <h4>If you have any questions or would like to get in touch, feel free to reach out!</h4>
            <ul>
                <li><a href="https://www.linkedin.com/in/ivelis-becker" target="_blank" rel="noopener noreferrer">LinkedIn: Ivelis Becker</a></li>
                <li><a href="https://www.github.com/I-0110" target="_blank" rel="noopener noreferrer">GitHub: I-0110</a></li>
                <li><a href="https://docs.google.com/document/d/1lorV3-UbrUcgeroGDkQJZsJIgdhzBKC3ozxjYEH-sms/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Resume: Download</a></li>
            </ul>
            <p>Feel free to reach out to me via email or connect with me on LinkedIn or GitHub. I look forward to hearing from you!</p>
        </div>
    </div>
);
};

export default Contact;