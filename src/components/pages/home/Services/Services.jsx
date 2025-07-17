import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './services.scss';

export const Services = () => {
  const AllServices = [
    { to: '/AllIns', nameKey: 'home.services.services__name1', textKey: 'home.services.services__text1' },
    { to: '/FinancialPlanning', nameKey: 'home.services.services__name2', textKey: 'home.services.services__text2' },
    { to: '/PensionManagement', nameKey: 'home.services.services__name3', textKey: 'home.services.services__text3' },
    { to: '/InvestmentFunds', nameKey: 'home.services.services__name4', textKey: 'home.services.services__text4' },
    { to: '/RealizationOfRights', nameKey: 'home.services.services__name5', textKey: 'home.services.services__text5' },
    { to: '/CustomerSupport', nameKey: 'home.services.services__name6', textKey: 'home.services.services__text6' },
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
    <section className='services container'>
      <h1 className='services__title'>
        {t('home.services.services__title')}
      </h1>
      <div className='services__boxes'>
        {AllServices.map((service, index) => (
          <div key={index} className='services__box'>
            <img
              src={`/miller/pages/home/services/services__icon--${index + 1}.svg`}
              alt="icon"
              className='services__icon'
            />
            <div className='services__content'>
              <h2 className='services__subtitle' dangerouslySetInnerHTML={{ __html: t(service.nameKey) }}></h2>
              <p className='services__text'>
                {t(service.textKey)}
              </p>
              <Link to={service.to} className='services__link'>
                {t('home.services.services__link')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
