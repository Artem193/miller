import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from "react";

import './processCarIns.scss';

export const ProcessCarIns = () => {
  const { t, i18n } = useTranslation();
  const itemsRef = useRef([]);

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('processCarIns__item--visible');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section className='processCarIns container'>
      <h1 className='processCarIns__title'>{t('carInsurance.processCarIns.title')}</h1>
      <div className='processCarIns__items'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`processCarIns__item ${index % 2 === 1 ? 'processCarIns__item--reverse' : ''}`}
            ref={addToRefs}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <h2 className='processCarIns__circle'>
              {index}
            </h2>
            <div className='processCarIns__box'>
              <p className='processCarIns__text'>
                {t(`carInsurance.processCarIns.text${index}`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
