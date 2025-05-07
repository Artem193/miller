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

      <div className='processCarIns__blocks'>
        <div className='processCarIns__circleNum processCarIns__circleNum--1'>
          <p className='processCarIns__number'>1</p>
        </div>
        <div className='processCarIns__arrow processCarIns__arrow--1'></div>
        <div className='processCarIns__head processCarIns__head--1'>
          <p className='processCarIns__headText'>Оставьте заявку</p>
        </div>
        <div className='processCarIns__step processCarIns__step--1'>
          <p className='processCarIns__textDesk'>Свяжитесь с нами через сайт, телефон или WhatsApp</p>
        </div>

        <div className='processCarIns__circleNum processCarIns__circleNum--2'>
          <p className='processCarIns__number'>1</p>
        </div>
        <div className='processCarIns__arrow processCarIns__arrow--2'></div>
        <div className='processCarIns__head processCarIns__head--2'>
          <p className='processCarIns__headText'>Оставьте заявку</p>
        </div>
        <div className='processCarIns__step processCarIns__step--2'>
          <p className='processCarIns__textDesk'>Свяжитесь с нами через сайт, телефон или WhatsApp</p>
        </div>

        <div className='processCarIns__circleNum processCarIns__circleNum--3'>
          <p className='processCarIns__number'>1</p>
        </div>
        <div className='processCarIns__arrow processCarIns__arrow--3'></div>
        <div className='processCarIns__head processCarIns__head--3'>
          <p className='processCarIns__headText'>Оставьте заявку</p>
        </div>
        <div className='processCarIns__step processCarIns__step--3'>
          <p className='processCarIns__textDesk'>Свяжитесь с нами через сайт, телефон или WhatsApp</p>
        </div>

        <div className='processCarIns__circleNum processCarIns__circleNum--4'>
          <p className='processCarIns__number'>1</p>
        </div>
        <div className='processCarIns__arrow processCarIns__arrow--4'></div>
        <div className='processCarIns__head processCarIns__head--4'>
          <p className='processCarIns__headText'>Оставьте заявку</p>
        </div>
        <div className='processCarIns__step processCarIns__step--4'>
          <p className='processCarIns__textDesk'>Свяжитесь с нами через сайт, телефон или WhatsApp</p>
        </div>

        <div className='processCarIns__circleNum processCarIns__circleNum--5'>
          <p className='processCarIns__number'>1</p>
        </div>
        <div className='processCarIns__head processCarIns__head--5'>
          <p className='processCarIns__headText'>Оставьте заявку</p>
        </div>
        <div className='processCarIns__step processCarIns__step--5'>
          <p className='processCarIns__textDesk'>Свяжитесь с нами через сайт, телефон или WhatsApp</p>
        </div>

      </div>
    </section>
  )
}
