import { useState } from "react";

import './riskItem.scss';

export const RiskItem = ({ subtitle, description, proof, num }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`riskItem riskItem--${num}`}>
      <div className={`riskItem__descriptionFlex riskItem__descriptionFlex--emoji${num}`} onClick={handleToggle}>
        <p className='riskItem__subtitle' dangerouslySetInnerHTML={subtitle}></p>
        <img
          src={`pages/businessIns/riskItem__icon--${num}.svg`}
          alt="icon"
          className={`explanation__icon ${isOpen ? 'explanation__icon--open' : ''}`}
        />
      </div>

      {isOpen && (
        <div>
          <p className='riskItem__description'>
            {description}
          </p>
          <p className='riskItem__proof'>
            {proof}
          </p>
        </div>
      )}
    </div>
  )
}
