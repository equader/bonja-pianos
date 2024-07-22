import React, { useState } from 'react';
import InfoAlert from './InfoAlert'; // Adjust the import path as needed

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && <InfoAlert message="Info alert! All prices for services will be charged alongside GST. This allows us to continue delivering excellent service." onClose={handleClose} />}
    </div>
  );
};

export default Alert;