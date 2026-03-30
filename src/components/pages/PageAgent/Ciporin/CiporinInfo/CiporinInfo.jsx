import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './ciporinInfo.scss'

export const CiporinInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.ciporinInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.ciporinInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.ciporinInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.ciporinInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.ciporinInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.ciporinInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.ciporinInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.ciporinInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.ciporinInfo.item9' },
    { to: '/FinancialPlanning', textKey: 'pageAgent.ciporinInfo.item10' },
    { to: '/PensionManagement', textKey: 'pageAgent.ciporinInfo.item11' },
    { to: '/InvestmentFunds', textKey: 'pageAgent.ciporinInfo.item12' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.ciporinInfo.item13' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972502568471',
      textKey: 'pageAgent.ciporinInfo.contactsItem1',
      icon: 'pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:elenaciporin@gmail.com',
      textKey: 'pageAgent.ciporinInfo.contactsItem2',
      icon: 'pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972502568471',
      textKey: 'pageAgent.ciporinInfo.contactsItem3',
      icon: 'pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://t.me/+972502568471',
      textKey: 'pageAgent.ciporinInfo.contactsItem4',
      icon: 'pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='ciporinInfo container'>
      <div className='ciporinInfo__about'>
        <h2 className='ciporinInfo__title'>{t('pageAgent.ciporinInfo.title1')}</h2>
        <p className='ciporinInfo__text' dangerouslySetInnerHTML={{ __html: t('pageAgent.ciporinInfo.text') }}></p>
      </div>

      <div className='ciporinInfo__canHelp'>
        <h2 className='ciporinInfo__title'>{t('pageAgent.ciporinInfo.title2')}</h2>
        <ul className='ciporinInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='ciporinInfo__item'>
              <Link to={item.to} className='ciporinInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='ciporinInfo__contacts'>
        <h2 className='ciporinInfo__title'>{t('pageAgent.ciporinInfo.title3')}</h2>
        <ul className='ciporinInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='ciporinInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ciporinInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="ciporinInfo__icon"
                />
                <span className='ciporinInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
