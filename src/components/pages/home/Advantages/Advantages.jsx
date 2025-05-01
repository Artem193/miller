import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './advantages.scss'

export const Advantages = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='advantages container'>
      <h1 className='advantages__title'>{t('home.advantages.advantages__title')}</h1>

      <div className='advantages__blocks'>
        <div className='advantages__block'>
          <img
            src={i18n.language === 'ru' ? '/miller/advantages__img1.png' : '/miller/advantages__img1--he.png'}
            alt="icon"
            className='advantages__img'
          />
          <div className='advantages__name'>{t(`home.advantages.advantages__name1`)}</div>
          <div className='advantages__text'>{t(`home.advantages.advantages__text1`)}</div>
        </div>

        <div className='advantages__block advantages__block--white'>
          <img
            src={i18n.language === 'ru' ? '/miller/advantages__img2.png' : '/miller/advantages__img2--he.png'}
            alt="icon"
            className='advantages__img'
          />
          <div className='advantages__name'>{t(`home.advantages.advantages__name2`)}</div>
          <div className='advantages__text'>{t(`home.advantages.advantages__text2`)}</div>
        </div>

        <div className='advantages__block'>
          <img
            src="/miller/advantages__img3.png"
            alt="icon"
            className='advantages__img'
          />
          <div className='advantages__name'>{t(`home.advantages.advantages__name3`)}</div>
          <div className='advantages__text'>{t(`home.advantages.advantages__text3`)}</div>
        </div>
      </div>
    </section>
  );
};

