import React from 'react';

const Button = ({ buttonName, onClick }) => {
  function clickHandler() {
    alert('This demo project!');
  }
  return (
    <div>
      <button onClick={() => clickHandler()}>{buttonName}</button>
    </div>
  );
};

export default Button;
