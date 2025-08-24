import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './aboutForServices.scss'

export const AboutForServices = ({
  arrayIndexes,
  title,
  text,
  textMod,
  nameBox,
  textBox,
  calc
}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='aboutForServices container'>
      <h1 className='aboutForServices__title'>{title}</h1>
      <p className='aboutForServices__text'>
        {text}
      </p>
      <div className='aboutForServices__flex'>
        <div className='aboutForServices__boxes'>
          {textMod}
          {arrayIndexes.map((index) => (
            <div
              key={index}
              className='aboutForServices__box'
            >
              <img src="componentsForServices/aboutForServices/aboutForServices__icon.svg" alt="icon" className='aboutForServices__icon aboutForServices__icon--desktop' />

              <div className='aboutForServices__textContent'>
                <div className='aboutForServices__flexImgTitle'>
                  <img src="componentsForServices/aboutForServices/aboutForServices__icon.svg" alt="icon" className='aboutForServices__icon aboutForServices__icon--mob' />
                  <h3 className='aboutForServices__nameBox'>
                    {nameBox(index)}
                  </h3>
                </div>
                <p className='aboutForServices__textBox'>
                  {Array.isArray(textBox(index)) ? (
                    <ul className='aboutForServices__list'>
                      {textBox(index).map((item, idx) => (
                        <li key={idx} className='aboutForServices__listItem'>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='aboutForServices__textBox'>
                      {textBox(index)}
                    </p>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        {calc}
      </div>
    </section>
  )
}
