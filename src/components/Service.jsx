import './css/hero.css';

export const Service = () => {

    const services = [
        {
            key: 0, img: "", title: "Piano Tuning",
            desc: (
                <ul>
                    <li>Expert Ear Tuning for Perfect Pitch.</li>
                    <li>Tuning to Concert Pitch (A440Hz) for Harmonious Sound.</li>
                    <li>Ensuring Equal Temperament for Balanced Intonation Across All Keys.</li>
                    <li>Stable Tuning Throughout All Registers for Consistent Quality.</li>
                    <li>Final Play-Through to Guarantee Your Piano Sounds Impeccable.</li>
                </ul>
            )
        },
        {
            key: 1, img: "", title: "Piano Servicing",
            desc: (
                <ul>
                    <li>Adjust to concert-level standards for precise control.</li>
                    <li>Enhance touch response and tone quality for expressive performance.</li>
                    <li>Modify the tone for even, responsive playing across all keys.</li>
                    <li>Enable better musical phrasing and clear articulation.</li>
                </ul>
            )
        },
        {
            key: 2, img: "", title: "Detailed Cleaning", 
             desc: (
                <ul>
                    <li>Address often-neglected areas to rejuvenate your piano's look and feel.</li>
                    <li>Enhance touch response and tone quality for expressive performance.</li>
                    <li>Modify the tone for even, responsive playing across all keys.</li>
                    <li>Enable better musical phrasing and clear articulation.</li>
                </ul>
            )
         },
    ];

    return (
        <div className="ServicesContainer">
            <div className="Services">
                {services.map(service => (
                    <div key={service.key} className="Service">
                        <img src={service.img} />
                        <div className="ServiceText">
                            <h2>{service.title}</h2>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}