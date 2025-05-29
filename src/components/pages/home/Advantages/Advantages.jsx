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
            src='/miller/pages/home/advantages/advantages__img1.svg'
            alt="icon"
            className='advantages__img'
          />
          <div className='advantages__name' dangerouslySetInnerHTML={{ __html: t(`home.advantages.advantages__name1`)}}></div>
          <div className='advantages__text'>{t(`home.advantages.advantages__text1`)}</div>
        </div>

        <div className='advantages__block advantages__block--white'>
          <img
            src='/miller/pages/home/advantages/advantages__img2.svg'
            alt="icon"
            className='advantages__img'
          />
          <div className='advantages__name'>{t(`home.advantages.advantages__name2`)}</div>
          <div className='advantages__text'>{t(`home.advantages.advantages__text2`)}</div>
        </div>

        <div className='advantages__block'>
          <img
            src='/miller/pages/home/advantages/advantages__img3.svg'
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

