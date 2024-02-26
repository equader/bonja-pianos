import React from "react";
import './css/hero.css';
import pianoTuner from './images/pianotuning.png';
import Button from './Button'
import { Service } from "./Service";

function Hero(){
    return (
        <>
            <div className="HeroContainer">
                <div className="HeroBlurb">
                    <div className="HeroHeader">
                        <h1>In tune with excellence</h1>
                        <p>Bonja Pianos is proud to have continue our five years of service to individuals and leading music institutions in Sydney and Canberra. <br></br><br></br> We're dedicated to carefully maintaining and reviving every piano entrusted to us.</p>
                    </div>
                    <Button text="Request a quote" onClick={() => console.log('Button clicked')} />
                </div>
                <img loading="lazy" src={pianoTuner} alt="Man tuning piano" className="manPiano" />
            </div>
            <div className="ServicesContainer">
                <div className="ServicesTitle">
                    <h1>Services</h1>
                    <h3>We offer a range of services that help ensure your piano is up to scratch and performing where it should be.</h3>
                </div>
                <div> 
                    <Service />
                </div>
            </div>
        </>
    ) 
}

export default Hero;