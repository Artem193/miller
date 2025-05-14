import { useState } from "react";

import './explanation.scss';

export const Explanation = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='explanation'>
      <div className='explanation__questionFlex' onClick={handleToggle}>
        <p className='explanation__question'>{question}</p>
        <img
          src="/miller/componentsForServices/faqForServices/explanation/faqCarIns__icon.svg"
          alt="icon"
          className={`explanation__icon ${isOpen ? 'explanation__icon--open' : ''}`}
        />
      </div>

      {isOpen && (
        <p className='explanation__answer'>
          {answer}
        </p>
      )}
    </div>
  )
}
