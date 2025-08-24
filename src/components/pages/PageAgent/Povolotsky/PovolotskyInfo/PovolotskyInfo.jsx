import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './povolotskyInfo.scss'

export const PovolotskyInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.povolotskyInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.povolotskyInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.povolotskyInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.povolotskyInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.povolotskyInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.povolotskyInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.povolotskyInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.povolotskyInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.povolotskyInfo.item9' },
    { to: '/FinancialPlanning', textKey: 'pageAgent.povolotskyInfo.item10' },
    { to: '/PensionManagement', textKey: 'pageAgent.povolotskyInfo.item11' },
    { to: '/InvestmentFunds', textKey: 'pageAgent.povolotskyInfo.item12' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.povolotskyInfo.item13' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972506684684',
      textKey: 'pageAgent.povolotskyInfo.contactsItem1',
      icon: 'pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:michael@miller-ins.co.il',
      textKey: 'pageAgent.povolotskyInfo.contactsItem2',
      icon: 'pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972506684684',
      textKey: 'pageAgent.povolotskyInfo.contactsItem3',
      icon: 'pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://t.me/+972506684684',
      textKey: 'pageAgent.povolotskyInfo.contactsItem4',
      icon: 'pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const licenses = [
    {
      href: 'pages/agentPage/Povolotskiy/license1.png',
      textKey: 'pageAgent.povolotskyInfo.license1',
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
    <section className='povolotskyInfo container'>
      <div className='povolotskyInfo__about'>
        <h2 className='povolotskyInfo__title'>{t('pageAgent.povolotskyInfo.title1')}</h2>
        <p className='povolotskyInfo__text' dangerouslySetInnerHTML={{ __html: t('pageAgent.povolotskyInfo.text') }}></p>
      </div>

      <div className='povolotskyInfo__canHelp'>
        <h2 className='povolotskyInfo__title'>{t('pageAgent.povolotskyInfo.title2')}</h2>
        <ul className='povolotskyInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='povolotskyInfo__item'>
              <Link to={item.to} className='povolotskyInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='povolotskyInfo__contacts'>
        <h2 className='povolotskyInfo__title'>{t('pageAgent.povolotskyInfo.title3')}</h2>
        <ul className='povolotskyInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='povolotskyInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="povolotskyInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="povolotskyInfo__icon"
                />
                <span className='povolotskyInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='povolotskyInfo__licenses'>
        <h2 className='povolotskyInfo__title'>{t('pageAgent.povolotskyInfo.title4')}</h2>
        <ul className='povolotskyInfo__list'>
          {licenses.map((item, index) => (
            <li key={index} className='povolotskyInfo__item'>
              <button
                onClick={() => setSelectedImage(item.href)}
                className='povolotskyInfo__link povolotskyInfo__link--button'
              >
                {t(item.textKey)}
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="povolotskyInfo__imageModal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="license"
              className='povolotskyInfo__img'
            />
          </div>
        )}
      </div>
    </section>
  )
}
