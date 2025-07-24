import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './permyakovInfo.scss'

export const PermyakovInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.permyakovInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.permyakovInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.permyakovInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.permyakovInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.permyakovInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.permyakovInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.permyakovInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.permyakovInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.permyakovInfo.item9' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.permyakovInfo.item10' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972522253328',
      textKey: 'pageAgent.permyakovInfo.contactsItem1',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:stasbityah@gmail.com',
      textKey: 'pageAgent.permyakovInfo.contactsItem2',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972522253328',
      textKey: 'pageAgent.permyakovInfo.contactsItem3',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://www.facebook.com/harbitinsurance?mibextid=wwXIfr&rdid=2DNegwPA5m7BlgQA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19kFbry9rx%2F%3Fmibextid%3DwwXIfr#',
      textKey: 'pageAgent.permyakovInfo.contactsItem4',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const licenses = [
    {
      href: '/miller/pages/agentPage/Permyakov/license1.jpg',
      textKey: 'pageAgent.permyakovInfo.license1',
    },
    // {
    //   href: '/miller/pages/agentPage/Permyakov/license2.png',
    //   textKey: 'pageAgent.permyakovInfo.license2',
    // },
    // {
    //   href: '/miller/pages/agentPage/Permyakov/license3.png',
    //   textKey: 'pageAgent.permyakovInfo.license3',
    // },
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
    <section className='permyakovInfo container'>
      <div className='permyakovInfo__about'>
        <h2 className='permyakovInfo__title'>{t('pageAgent.permyakovInfo.title1')}</h2>
        <p className='permyakovInfo__text' dangerouslySetInnerHTML={{ __html: t('pageAgent.permyakovInfo.text') }}></p>
      </div>

      <div className='permyakovInfo__canHelp'>
        <h2 className='permyakovInfo__title'>{t('pageAgent.permyakovInfo.title2')}</h2>
        <ul className='permyakovInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='permyakovInfo__item'>
              <Link to={item.to} className='permyakovInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='permyakovInfo__contacts'>
        <h2 className='permyakovInfo__title'>{t('pageAgent.permyakovInfo.title3')}</h2>
        <ul className='permyakovInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='permyakovInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="permyakovInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="permyakovInfo__icon"
                />
                <span className='permyakovInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='permyakovInfo__licenses'>
        <h2 className='permyakovInfo__title'>{t('pageAgent.permyakovInfo.title4')}</h2>
        <ul className='permyakovInfo__list'>
          {licenses.map((item, index) => (
            <li key={index} className='permyakovInfo__item'>
              <button
                onClick={() => setSelectedImage(item.href)}
                className='permyakovInfo__link permyakovInfo__link--button'
              >
                {t(item.textKey)}
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="permyakovInfo__imageModal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="license"
              className='permyakovInfo__img'
            />
          </div>
        )}
      </div>
    </section>
  )
}
