import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './millerKristinaInfo.scss'

export const MillerKristinaInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.millerKristinaInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.millerKristinaInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.millerKristinaInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.millerKristinaInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.millerKristinaInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.millerKristinaInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.millerKristinaInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.millerKristinaInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.millerKristinaInfo.item9' },
    { to: '/FinancialPlanning', textKey: 'pageAgent.millerKristinaInfo.item10' },
    { to: '/PensionManagement', textKey: 'pageAgent.millerKristinaInfo.item11' },
    { to: '/InvestmentFunds', textKey: 'pageAgent.millerKristinaInfo.item12' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.millerKristinaInfo.item13' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972536278616',
      textKey: 'pageAgent.millerKristinaInfo.contactsItem1',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:kristina@miller-ins.co.il',
      textKey: 'pageAgent.millerKristinaInfo.contactsItem2',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972536278616',
      textKey: 'pageAgent.millerKristinaInfo.contactsItem3',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61551068793445',
      textKey: 'pageAgent.millerKristinaInfo.contactsItem4',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const licenses = [
    {
      href: '/miller/pages/agentPage/MillerKristina/license1.jpg',
      textKey: 'pageAgent.millerKristinaInfo.license1',
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
    <section className='millerKristinaInfo container'>
      <div className='millerKristinaInfo__about'>
        <h2 className='millerKristinaInfo__title'>{t('pageAgent.millerKristinaInfo.title1')}</h2>
        <p className='millerKristinaInfo__text' dangerouslySetInnerHTML={{ __html: t('pageAgent.millerKristinaInfo.text') }}></p>
      </div>

      <div className='millerKristinaInfo__canHelp'>
        <h2 className='millerKristinaInfo__title'>{t('pageAgent.millerKristinaInfo.title2')}</h2>
        <ul className='millerKristinaInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='millerKristinaInfo__item'>
              <Link to={item.to} className='millerKristinaInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='millerKristinaInfo__contacts'>
        <h2 className='millerKristinaInfo__title'>{t('pageAgent.millerKristinaInfo.title3')}</h2>
        <ul className='millerKristinaInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='millerKristinaInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="millerKristinaInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="millerKristinaInfo__icon"
                />
                <span className='millerKristinaInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='millerKristinaInfo__licenses'>
        <h2 className='millerKristinaInfo__title'>{t('pageAgent.millerKristinaInfo.title4')}</h2>
        <ul className='millerKristinaInfo__list'>
          {licenses.map((item, index) => (
            <li key={index} className='millerKristinaInfo__item'>
              <button
                onClick={() => setSelectedImage(item.href)}
                className='millerKristinaInfo__link millerKristinaInfo__link--button'
              >
                {t(item.textKey)}
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="millerKristinaInfo__imageModal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="license"
              className='millerKristinaInfo__img'
            />
          </div>
        )}
      </div>
    </section>
  )
}
