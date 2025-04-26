import React from "react";
import coffee from "../../public/coffee.png";
import farm from "../../public/theFarm.png";
import music from "../../public/musicDiary.png";

export default function Project() {
    return (
        <div>
            <h2>Good Coffee Beans</h2>
            <p>For coffee lovers who loves to keep track of their coffee adventures, we got you! This website record your coffees and recipes. As a notebook, but online and accesible.</p> 
            <a href="https://vite.dev" target="_blank">
            <img src={coffee} className="logo" alt="Good Coffee Beans" style={{ width: "300px" }} /></a>
            <br/>
            <h2>Farm Management</h2>
            <p>Farm Manager is a complete all-in-one manager to help farmers of all sizes view, control, and organize all their farms information in one place</p>
            <img src={farm} alt="Farm Management" style={{ width: "300px" }} />
            <br/> 
            <h2>Music Diary</h2>
            <p>For beginners to professionals, keep track of your instrument practice and keep updated with famous classical musicians and more. And all classic in one place!</p>
            <img src={music} alt="Music Diary" style={{ width: "300px" }} />
            <br/>
        </div>
    );
}