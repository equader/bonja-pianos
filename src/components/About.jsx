import React from "react";
import mark from "./images/markp.jpg"

function About(){
    return(
        <div id="about-section" className="about">
            <h1>About Us</h1>
                    <p>Hi! Welcome, my name's Mark Bonja, piano aficionado and founder of Bonja Pianos. I started Bonja Pianos with the firm belief in the power of music to celebrate life's moments and navigate its challenges. My expertise isn't just in tuning, cleaning and fixing pianos; it's about infusing each instrument with care and resilience to foster a community through music.</p>
                    
                    <p>Whether you're a seasoned maestro or taking your first steps into the world of music, at Bonja Pianos, you're not just a customer; you're part of a family bound by the love of music. At Bonja Pianos, we don't just restore pianos; we revive stories, memories, and dreams. Join us, and let's make music that resonates with the soul and echoes through generations.</p> 
                    <img src={mark}></img>
            
        </div>
    )
}

export default About;