import React, { useState } from 'react';
import './Accordian.css'; // Import your CSS file

const Accordian = (props) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className={`Accordion ${isActive ? 'active' : ''}`}>
      <div
        className="Accordion-header"
        onClick={() => {
          setActive(!isActive);
        }}
      >
        <div className="Accordion-title">{props.data.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div className="Accordion-content">{isActive && props.data.content}</div>
    </div>
  );
};

export default Accordian;
