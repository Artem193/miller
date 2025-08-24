import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import { Header } from '../../Header/Header';
import { Contacts } from '../home/Contacts/Contacts';
import { Footer } from '../../Footer/Footer';

import './allIns.scss';

export const AllIns = () => {
  const AllServices = [
    { to: '/CarInsurance', nameKey: 'allIns.name1', textKey: 'allIns.text1' },
    { to: '/MortgageIns', nameKey: 'allIns.name2', textKey: 'allIns.text2' },
    { to: '/TouristIns', nameKey: 'allIns.name3', textKey: 'allIns.text3' },
    { to: '/HealthIns', nameKey: 'allIns.name4', textKey: 'allIns.text4' },
    { to: '/LifeIns', nameKey: 'allIns.name5', textKey: 'allIns.text5' },
    { to: '/BusinessIns', nameKey: 'allIns.name6', textKey: 'allIns.text6' },
    { to: '/TravelIns', nameKey: 'allIns.name7', textKey: 'allIns.text7' },
    { to: '/AccidentIns', nameKey: 'allIns.name8', textKey: 'allIns.text8' },
    { to: '/PropertyIns', nameKey: 'allIns.name9', textKey: 'allIns.text9' },
  ]
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <>
      <Header />
      <section className='allIns container'>
        <h1 className='allIns__title'>
          {t('allIns.title')}
        </h1>
        <div className='allIns__boxes'>
          {AllServices.map((service, index) => (
            <div key={index} className='allIns__box'>
              <img
                src={`pages/allIns/allIns__icon--${index + 1}.svg`}
                alt="icon"
                className='allIns__icon'
              />
              <div className='allIns__content'>
                <h2 className='allIns__subtitle' dangerouslySetInnerHTML={{ __html: t(service.nameKey) }}></h2>
                <p className='allIns__text'>
                  {t(service.textKey)}
                </p>
                <Link to={service.to} className='allIns__link'>
                  {t('allIns.link')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contacts />
      <Footer />
    </>
  )
}
