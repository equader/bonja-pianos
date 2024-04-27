import React, { useEffect } from 'react';


const ElfsightWidget = () => {
  useEffect(() => {
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
        <div class="elfsight-app-65d58f4e-5e66-4b16-a046-2338c8484007" data-elfsight-app-lazy></div> 
    </div>

  );
};

export default ElfsightWidget;
