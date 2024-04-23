import React from "react";
import mark from "./images/markp.jpg"

function About(){
    return(
        <div id="about-section" className="about">
            <h1>About Us</h1>
            <p>Hello! I'm Mark Bonja, a passionate piano aficionado and the founder of Bonja Pianos. I established Bonja Pianos based on a deep-seated belief in music's transformative power to celebrate the pivotal moments of our lives and help us through challenges. My expertise extends beyond mere tuning, cleaning, and repairing pianos; it involves imbuing each instrument with meticulous care and resilience, thereby nurturing a community united by music.</p>
            <p>Whether you are a seasoned maestro or a beginner eager to explore the musical world, at Bonja Pianos, you are more than a customer—you are an integral part of a family, connected by our collective love for music. Here, we don’t simply restore pianos; we breathe life into stories, awaken cherished memories, and rekindle dreams.</p>
            <img src={mark}></img>
        </div>
    )
}

export default About;