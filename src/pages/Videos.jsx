import React from "react";
import { useState } from "react";

const videos = [
    {
        title: "Chaminade: Concertino, Op. 107",
        details: [
            "Recorded on November 17, 2024 at Junction City, KS",
            "Performed by Ivelis Becker",
            "Accompanied by Heart of America Band"
        ],
        src: "https://www.youtube.com/embed/45GDVJtWCQc"
    },
    {
        title: "La Llorona flute and guitar",
        details: [
            "Recorded on October 23, 2024 at Washington Elementary School, Junction City, KS",
            "Performed by Ivelis Becker",
            "Accompanied by Elizabeth Sandra Perez"
        ],
        src: "https://www.youtube.com/embed/X8CXnDZdu3M"
    },
    {
        title: "Flute Recital May 2023",
        details: [
            "Recorded on May 7th, 2023 at Kirmser Hall/McCain 204, K-State University, Manhattan, KS",
            "Performed by Ivelis Becker",
            "Accompanied by Wenny Weiss"
        ],
        src: "https://www.youtube.com/embed/Mav6WwOgpgY"
    }
];

export default function VideosCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {title, details, src} = videos[currentIndex];

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }
    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    }

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
            <button onClick={prevVideo} style={{ marginRight: "1em" }}>← Previous</button>
            <button onClick={nextVideo} style={{ marginLeft: "1em" }}>Next →</button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <iframe
                    width="600"
                    height="400"
                    src={src}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}