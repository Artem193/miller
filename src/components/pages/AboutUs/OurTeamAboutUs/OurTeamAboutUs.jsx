import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './ourTeamAboutUs.scss'

export const OurTeamAboutUs = () => {
  const agents = [
    { to: '/MillerAnatoliy' },
    { to: '/MillerKristina' },
    { to: '/Permyakov' },
    { to: '/Plugin' },
    { to: '/Povolotsky' },
  ]

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='ourTeamAboutUs container'>
      <h1 className='ourTeamAboutUs__title'>{t('aboutUs.ourTeamAboutUs.title')}</h1>
      <p
        className="ourTeamAboutUs__text"
        dangerouslySetInnerHTML={{ __html: t('aboutUs.ourTeamAboutUs.text') }}
      />

      <div className='ourTeamAboutUs__cards'>
        {agents.map((agent, index) => (
          <div className='ourTeamAboutUs__card' key={index}>
            <picture>
              <source
                media="(max-width: 1080px)"
                srcSet={`pages/aboutUs/ourTeamAboutUs__photoMob${index + 1}.webp`}
              />
              <img
                src={`pages/aboutUs/ourTeamAboutUs__photoDesk${index + 1}.webp`}
                alt="photo"
                className="ourTeamAboutUs__photo"
              />
            </picture>
            <div className='ourTeamAboutUs__textContent'>
              <Link to={agent.to}>
                <p href="" className='ourTeamAboutUs__name'>{t(`aboutUs.ourTeamAboutUs.name${index + 1}`)}</p>
              </Link>
              <p className='ourTeamAboutUs__profession' dangerouslySetInnerHTML={{ __html: t(`aboutUs.ourTeamAboutUs.profession${index + 1}`) }}></p>
              <p className='ourTeamAboutUs__description'>{t(`aboutUs.ourTeamAboutUs.description${index + 1}`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
