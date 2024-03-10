import React from 'react';

const faqData = [
    {
        question: "What locations do you service?",
        answer: "We are based in Sydney and service the anywhere from the North Shore, Greater Western Sydney and anything in between. We also service the Canberra region!"
    },
    {
        question: "How much notice do you need to book a tuning?",
        answer: "Usually, 2-3 weeks notice is best."
    },
    {
      question: "How much do you charge for piano tuning?",
      answer: "$250."
    },
/*     {
        question: "Do you need to inspect the piano before purchasing?",
        answer: "Yes, book an inspection now. There's a $125 call-out fee."
    }, */
    {
        question: "What payment methods do you accept?",
        answer: "We accept Card, Cash, Bank transfer, and Pay-ID."
    },
    {
      question: "Do I need multiple tunings?",
      answer: "If the piano hasn't been tuned for over 5 years or is really out of tune, then you might need a follow-up tuning in 1-2 months."
    },
/*     {
        question: "How does humidity affect my piano?",
        answer: "Humidity plays a significant role in the maintenance and performance of your piano. Fluctuations in humidity levels can cause wooden components of the piano to expand and contract, which may lead to tuning instability, sticking keys, and other mechanical issues. High humidity can make the action of the piano heavier due to swollen timber, adding more friction to moving parts. Conversely, low humidity can cause the wood to shrink, affecting the sound and potentially leading to cracks in the soundboard. To mitigate these issues, Bonja Pianos recommends the installation of a Dampp-Chaser system, which helps maintain a stable humidity level around your piano, prolonging its life and ensuring consistent tuning stability. For pianos that haven't been tuned for an extended period or are experiencing humidity-related issues, our experts can provide a thorough inspection and service, adjusting the tuning, voicing, or any other necessary repairs to bring your piano back to its optimal condition. We understand the impact of humidity on pianos and are here to guide you in protecting and maintaining your instrument in any climate."
    }, */
/*     {
        question: "How should I clean and maintain my piano to keep it in the best condition, and how can Bonja Pianos assist?",
        answer: "Keeping your piano clean is crucial for its maintenance and longevity. For the exterior, use soapy water and a microfiber cloth to gently clean the surface. Avoid harsh chemicals such as acetone or methylated spirits, as these can damage the finish, leading to paint fading and potentially harming plastic components. To disinfect piano keys, a solution of mild soapy water and a soft cloth can be effective; ensure the cloth is well-wrung to prevent moisture from seeping into the keys. If your piano has developed a bad odor, this could indicate mold buildup, requiring professional inspection. In terms of professional care, Bonja Pianos offers detailed cleaning services, including polishing and waxing, to not only clean but also protect the finish of your piano. For issues beyond simple cleaning, such as odor removal or internal cleaning, our expert technicians can provide a thorough inspection and recommend the best course of action. Maintaining a clean piano not only enhances its appearance but also contributes to its overall health and sound quality. Let Bonja Pianos guide you in keeping your piano looking and sounding its best."
    },   */         
/*     {
      question: "When should I tune my piano next?",
      answer: "Most pianos need to be tuned once per year. It is important to tune in the same season/month that the piano was tuned previously. If your piano is really out of tune, then it might need a couple of tunings to stabilise the tension across the piano; after that, continuing with a yearly tuning is a good habit."
    }, */
    {
      question: "My piano hasn't been tuned for 20+ years, can you tune it?",
      answer: "Some pianos cannot be tuned to concert pitch due to age and lack of service, but in the hands of an expert, we can make your piano sound great. We always try to tune to concert pitch; if the technician isn't able to, they will let you know."
    },
  ];
  

function FAQ() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className={`accordion-header`} id={`flush-heading${index}`}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
              {faq.question}
            </button>
          </h2>
          <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
