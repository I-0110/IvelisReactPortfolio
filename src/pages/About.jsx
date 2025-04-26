import React from "react";
import me from "../assets/me.jpg"; 

export default function About() {
    return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
                src={me}
                alt="Profile Picture"
                style={{
                    width: "300px",
                    borderRadius: "20px 10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    marginRight: "20px",
                    objectFit: "contain",
                }}
            />
            <div style={{ maxWidth: "600px" }}> {/* Control the width of the text container */}
                <h3>Future Career</h3>
                <p>
                    I am working to become a professional Full Stack Software Engineer. 
                    With less than a year of experience, I have been digging very fast in this amazing world of coding! 
                </p>
                <h3>Present Career</h3>
                <p>
                    Previous to coding, I am a professional musician and general elementary music teacher. 
                    So, I carry the good habits of "practice makes perfect". 
                    And, the colorful and musical ideas of being a music teacher for the little ones.
                    I have been teaching for 10 years, and I have a lot of experience in the classroom.
                </p>
                <h3>Hobbies</h3>
                <p>
                    For hobbies, I love crochet, painting ceramics, and gardening.
                </p>
                <h3>My Skills</h3>
                <ul> 
                    <li>I have been learning JavaScript, TypeScript, React, Node.js, Express.js, MongoDB, PostgreSQL, MySQL, and SQL. Also, I am learning about testing and debugging.</li>
                    <li>I have been working with HTML, CSS, and Bootstrap for a long time.</li>
                    <li>Mastering Git and GitHub.</li>
                    <li>I have been learning about responsive design and how to make my projects look good on all devices.</li> 
                </ul>
                <h3>In the Learning Process</h3>
                <ul> 
                    <li>Agile and Scrum methodologies</li>
                    <li>RESTful APIs</li>
                </ul> 
                <h3>My Contribution</h3>
                <p>
                    This transition to code has been for me like switching from an instrument to learn a new one. 
                    Or, from learning deeply to speak Spanish to speak English. 
                    My big contribution to your team would be passion, enthusiasm, object-oriented, creativity, and resourcefulness when I don't have the answers.
                </p> 
            </div>
        </div>
    );
}