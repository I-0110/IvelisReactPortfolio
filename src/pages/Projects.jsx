import React from "react";
import { useState, useEffect } from "react";
import coffee from "../../public/coffee.png";
import farm from "../../public/theFarm.png";
import music from "../../public/musicDiary.png";
import ivelis from "../../public/ivelis.png"; 

// Set database of your projects here
const projects = [
    {
        title: "Good Coffee Beans",
        description: "For coffee lovers who loves to keep track of their coffee adventures, we got you! This website record your coffees and recipes. As a notebook, but online and accesible.",
        src: coffee,
        link: "https://zaccahimba.github.io/GoodCoffeeBeans/"
    },
    {
        title: "Ivelis Becker Portfolio",
        description: "This is my first personal portfolio website, built with html and css. It showcases my projects, skills, and experiences back in that time.",
        src: ivelis,
        link: "https://i-0110.github.io/IvelisPortfolio/"
    },
    {
        title: "Farm Management",
        description: "Farm Manager is a complete all-in-one manager to help farmers of all sizes view, control, and organize all their farms information in one place",
        src: farm,
        link: "https://farm-manager-h9l8.onrender.com/"
    },
    {
        title: "Music Diary",
        description: "For beginners to professionals, keep track of your instrument practice and keep updated with famous classical musicians and more. All classic in one place!",
        src: music,
        link: "https://i-0110.github.io/musicDiary/"
    }
];

// Export the function to display the projects
export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [intervalTime, _setIntervalTime] = useState(10000);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, intervalTime);
        return () => clearInterval(timer);
    }, [intervalTime, currentIndex]);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }   
    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }

    const { title, description, src, link } = projects[currentIndex]; 

// Return the basic structure of this page with the projects database
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={src} alt={title} style={{ width: "1200px", height: "400px" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button onClick={prevProject} style={{ marginRight: "1em" }}>← Previous</button>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button>View Project</button>
                </a>
                <button onClick={nextProject} style={{ marginLeft: "1em" }}>Next →</button>
            </div>
        </div>
    );
}