import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './ourTeamAboutUs.scss'

export const OurTeamAboutUs = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='ourTeamAboutUs container'>
      <h1 className='ourTeamAboutUs__title'>{t('aboutUs.ourTeamAboutUs.title')}</h1>
      <p className='ourTeamAboutUs__text'>{t('aboutUs.ourTeamAboutUs.text')}</p>

      <div className='ourTeamAboutUs__cards'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div className='ourTeamAboutUs__card' key={index}>
            <picture>
              <source
                media="(max-width: 1080px)"
                srcSet={`/miller/pages/aboutUs/ourTeamAboutUs__photoMob${index}.png`}
              />
              <img
                src={`/miller/pages/aboutUs/ourTeamAboutUs__photoDesk${index}.png`}
                alt="photo"
                className="ourTeamAboutUs__photo"
              />
            </picture>
            <div className='ourTeamAboutUs__textContent'>
              <a href="" className='ourTeamAboutUs__name'>{t(`aboutUs.ourTeamAboutUs.name${index}`)}</a>
              <p className='ourTeamAboutUs__profession'>{t(`aboutUs.ourTeamAboutUs.profession${index}`)}</p>
              <p className='ourTeamAboutUs__description'>{t(`aboutUs.ourTeamAboutUs.description${index}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
