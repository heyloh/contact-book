import React from 'react';

import './styles.css';

function Warn({ message }) {
  return(
    <div className="warning-container">
      <p>{message}</p>
    </div>
  );
}

export default Warn;
