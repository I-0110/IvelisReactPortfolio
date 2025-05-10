import React from "react";
import me from "../../public/hello.mp4"; 

export default function Home() {
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <video
                src={me} autoPlay loop muted
                alt="Profile Picture"
                style={
                    { 
                        width: "300px",
                        borderRadius: "20px 10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        marginRight: "20px",
                        objectFit: "contain",
                    }
                }
            ></video>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
                <h2>Welcome to Ivelis Becker's Portfolio!</h2>
                <h3>Showcasting my projects and more</h3>
                <br/>
                <p> Hi, I am Ivelis Becker, a passionate developer with a love for creating innovative and unique solutions. </p>
                <p> Explore my projects, skills, and experiences below.
                 Feel free to reach out if you have any questions or would like me to collaborate in your next awesome project!
                 You can find my projects on GitHub and my resume in the "Resume" section.
                 Thank you for visiting my portfolio!</p>
            </div>
        </div>
    );
}