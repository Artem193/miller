import { useTranslation, Trans } from 'react-i18next';
import { useEffect, useRef } from "react";

import './processForServices.scss';

export const ProcessForServices = ({ text, titleDesk, textDesk }) => {
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
            entry.target.classList.add('processForServices__item--visible');
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
    <section className='processForServices container'>
      <h1 className='processForServices__title'>{t('carInsurance.processCarIns.title')}</h1>
      <div className='processForServices__items'>
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`processForServices__item ${index % 2 === 1 ? 'processForServices__item--reverse' : ''}`}
            ref={addToRefs}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <h2 className='processForServices__circle'>
              {index}
            </h2>
            <div className='processForServices__box'>
              <p className='processForServices__text'>
                {text(index)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='processForServices__blocks'>
        {[1, 2, 3, 4, 5].map((index) => (
          <>
            <div className={`processForServices__circleNum processForServices__circleNum--${index}`}
            >
              <p className={index < 3 ? 'processForServices__number' : 'processForServices__number processForServices__number--black'}>{index}</p>
            </div>
            {index < 5 && (
              <div className={`processForServices__arrow processForServices__arrow--${index}`}></div>
            )}
            <div className={`processForServices__head processForServices__head--${index}`}>
              <p className={index < 3 ? 'processForServices__headText' : 'processForServices__headText processForServices__headText--black'}>{titleDesk(index)}</p>
            </div>
            <div className={`processForServices__step processForServices__step--${index}`}>
              <p className='processForServices__textDesk'>
                <Trans
                  i18nKey={textDesk(index)}
                  components={{
                    aPhone: <a href="tel:+972123456789" target="_blank" rel="noopener noreferrer" />,
                    aWhatsapp: <a href="https://wa.me/972123456789" target="_blank" rel="noopener noreferrer" />
                  }}
                />
              </p>
            </div>
          </>
        ))}
      </div>
    </section>
  )
}
