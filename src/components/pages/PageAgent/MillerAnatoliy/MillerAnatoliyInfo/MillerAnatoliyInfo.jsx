import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './millerAnatoliyInfo.scss'

export const MillerAnatoliyInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.millerAnatoliyInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.millerAnatoliyInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.millerAnatoliyInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.millerAnatoliyInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.millerAnatoliyInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.millerAnatoliyInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.millerAnatoliyInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.millerAnatoliyInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.millerAnatoliyInfo.item9' },
    { to: '/FinancialPlanning', textKey: 'pageAgent.millerAnatoliyInfo.item10' },
    { to: '/PensionManagement', textKey: 'pageAgent.millerAnatoliyInfo.item11' },
    { to: '/InvestmentFunds', textKey: 'pageAgent.millerAnatoliyInfo.item12' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.millerAnatoliyInfo.item13' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972504255338',
      textKey: 'pageAgent.millerAnatoliyInfo.contactsItem1',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:anatoly@miller-ins.co.il',
      textKey: 'pageAgent.millerAnatoliyInfo.contactsItem2',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972504255338',
      textKey: 'pageAgent.millerAnatoliyInfo.contactsItem3',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://www.facebook.com/anatolynatan.miller',
      textKey: 'pageAgent.millerAnatoliyInfo.contactsItem4',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const licenses = [
    // {
    //   href: '/miller/pages/agentPage/AnatoliyMiller/license1.jpg',
    //   textKey: 'pageAgent.millerAnatoliyInfo.license1',
    // },
    {
      href: '/miller/pages/agentPage/AnatoliyMiller/license2.jpg',
      textKey: 'pageAgent.millerAnatoliyInfo.license2',
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
    <section className='millerAnatoliyInfo container'>
      <div className='millerAnatoliyInfo__about'>
        <h2 className='millerAnatoliyInfo__title'>{t('pageAgent.millerAnatoliyInfo.title1')}</h2>
        <p className='millerAnatoliyInfo__text' dangerouslySetInnerHTML={{ __html: t('pageAgent.millerAnatoliyInfo.text') }}></p>
      </div>

      <div className='millerAnatoliyInfo__canHelp'>
        <h2 className='millerAnatoliyInfo__title'>{t('pageAgent.millerAnatoliyInfo.title2')}</h2>
        <ul className='millerAnatoliyInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='millerAnatoliyInfo__item'>
              <Link to={item.to} className='millerAnatoliyInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='millerAnatoliyInfo__contacts'>
        <h2 className='millerAnatoliyInfo__title'>{t('pageAgent.millerAnatoliyInfo.title3')}</h2>
        <ul className='millerAnatoliyInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='millerAnatoliyInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="millerAnatoliyInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="millerAnatoliyInfo__icon"
                />
                <span className='millerAnatoliyInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='millerAnatoliyInfo__licenses'>
        <h2 className='millerAnatoliyInfo__title'>{t('pageAgent.millerAnatoliyInfo.title4')}</h2>
        <ul className='millerAnatoliyInfo__list'>
          {licenses.map((item, index) => (
            <li key={index} className='millerAnatoliyInfo__item'>
              <button
                onClick={() => setSelectedImage(item.href)}
                className='millerAnatoliyInfo__link millerAnatoliyInfo__link--button'
              >
                {t(item.textKey)}
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="millerAnatoliyInfo__imageModal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="license"
              className='millerAnatoliyInfo__img'
            />
          </div>
        )}
      </div>
    </section>
  )
}
