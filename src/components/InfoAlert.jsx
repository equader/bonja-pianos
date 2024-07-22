import React from 'react';

const InfoAlert = ({ message, onClose }) => {
  return (
    <div style={styles.alertContainer}>
      <span style={styles.message}>{message}</span>
      <button onClick={onClose} style={styles.closeButton}>×</button>
    </div>
  );
};

const styles = {
  alertContainer: {
    backgroundColor: '#cffafe',
    border: '1px solid #d0e4cf',
    borderRadius: '4px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#408ca1',
  },
  message: {
    fontSize: '16px',
    flexGrow: 1,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#2c7a2c',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default InfoAlert;
