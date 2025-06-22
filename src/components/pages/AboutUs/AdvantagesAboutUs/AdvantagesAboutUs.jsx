import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './advantagesAboutUs.scss'

export const AdvantagesAboutUs = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='advantagesAboutUs container'>
      <h1 className='advantagesAboutUs__title'>{t('aboutUs.advantagesAboutUs.title')}</h1>

      <div className='advantagesAboutUs__blocks'>
        {[1, 2, 3, 4].map((index) => (
          <div className='advantagesAboutUs__block' key={index}>
            <img
              src={`/miller/pages/aboutUs/advantagesAboutUs__img${index}.svg`}
              alt="icon"
              className='advantagesAboutUs__img'
            />
            <h2 className='advantagesAboutUs__name' dangerouslySetInnerHTML={{ __html: t(`aboutUs.advantagesAboutUs.name${index}`) }}></h2>
            <p className='advantagesAboutUs__text'>{t(`aboutUs.advantagesAboutUs.text${index}`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

