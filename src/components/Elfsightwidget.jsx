import React, { useEffect } from 'react';
import './css/reviews.css';

const ElfsightWidget = () => {
  useEffect(() => {
    // Check if the script is already added
    const existingScript = document.getElementById('elfsight-script');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.id = 'elfsight-script';
      script.defer = true;
      document.body.appendChild(script);
    }
    

    return () => {
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className='reviews'>
        <h1>Hear from our customers</h1>
        <div className="elfsight-app-cd147c3c-ff50-4e87-933a-3107588ddb8b" data-elfsight-app-lazy></div>
    </div>

  );
};

export default ElfsightWidget;
