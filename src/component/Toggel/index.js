

import  { useState } from 'react';

const Toggle = ({ onChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleClick = () => {
    setIsDarkMode(!isDarkMode);
    if (onChange) {
      onChange(!isDarkMode); 
    }
  };

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={handleToggleClick}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Toggle;
