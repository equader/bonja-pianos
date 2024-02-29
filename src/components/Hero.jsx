import React from "react";
import './css/hero.css';
import pianoTuner from './images/pianotuning.png';
import Button from './Button'

function Hero(){
    return(
        <div className="HeroContainer">
            <div className="HeroBlurb">
                <div className="HeroHeader">
                    <h1>Piano servicing you can trust</h1>
                    <p>At Bonja Pianos, we're thrilled to celebrate five wonderful years of serving both individuals and prestigious music institutions across Sydney and Canberra. <br></br><br></br> Our passion lies in meticulously caring for and rejuvenating each piano that comes our way, ensuring every instrument sings with its fullest potential. It's a journey we cherish deeply, and we're excited to continue sharing our love for pianos with you.</p>
                </div>
                <Button text="Request a quote" onClick={() => console.log('Button clicked')} />
            </div>
            <img loading="lazy" src={pianoTuner} alt="Man tuning piano" className="manPiano" />
        </div>
    )
}

export default Hero;