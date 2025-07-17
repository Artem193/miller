import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import './pluginInfo.scss'

export const PluginInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = [
    { to: '/CarInsurance', textKey: 'pageAgent.pluginInfo.item1' },
    { to: '/MortgageIns', textKey: 'pageAgent.pluginInfo.item2' },
    { to: '/TouristIns', textKey: 'pageAgent.pluginInfo.item3' },
    { to: '/HealthIns', textKey: 'pageAgent.pluginInfo.item4' },
    { to: '/LifeIns', textKey: 'pageAgent.pluginInfo.item5' },
    { to: '/BusinessIns', textKey: 'pageAgent.pluginInfo.item6' },
    { to: '/TravelIns', textKey: 'pageAgent.pluginInfo.item7' },
    { to: '/AccidentIns', textKey: 'pageAgent.pluginInfo.item8' },
    { to: '/PropertyIns', textKey: 'pageAgent.pluginInfo.item9' },
    { to: '/FinancialPlanning', textKey: 'pageAgent.pluginInfo.item10' },
    { to: '/PensionManagement', textKey: 'pageAgent.pluginInfo.item11' },
    { to: '/InvestmentFunds', textKey: 'pageAgent.pluginInfo.item12' },
    { to: '/RealizationOfRights', textKey: 'pageAgent.pluginInfo.item13' },
  ];

  const contactsItem = [
    {
      href: 'tel:+972536278616',
      textKey: 'pageAgent.pluginInfo.contactsItem1',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon1.svg',
    },
    {
      href: 'mailto:kristina@miller-ins.co.il',
      textKey: 'pageAgent.pluginInfo.contactsItem2',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon2.svg',
    },
    {
      href: 'https://wa.me/972536278616',
      textKey: 'pageAgent.pluginInfo.contactsItem3',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon3.svg',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61551068793445',
      textKey: 'pageAgent.pluginInfo.contactsItem4',
      icon: '/miller/pages/agentPage/AnatoliyMiller/icon4.svg',
    },
  ];

  const licenses = [
    {
      href: '/miller/pages/agentPage/MillerKristina/license1.jpg',
      textKey: 'pageAgent.pluginInfo.license1',
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
    <section className='pluginInfo container'>
      <div className='pluginInfo__about'>
        <h2 className='pluginInfo__title'>{t('pageAgent.pluginInfo.title1')}</h2>
        <p className='pluginInfo__text'>{t(`pageAgent.pluginInfo.text`)}</p>
      </div>

      <div className='pluginInfo__canHelp'>
        <h2 className='pluginInfo__title'>{t('pageAgent.pluginInfo.title2')}</h2>
        <ul className='pluginInfo__list'>
          {items.map((item, index) => (
            <li key={index} className='pluginInfo__item'>
              <Link to={item.to} className='pluginInfo__link'>
                {t(item.textKey)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='pluginInfo__contacts'>
        <h2 className='pluginInfo__title'>{t('pageAgent.pluginInfo.title3')}</h2>
        <ul className='pluginInfo__contactsList'>
          {contactsItem.map((item, index) => (
            <li key={index} className='pluginInfo__contactsItem'>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pluginInfo__contactLink"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="pluginInfo__icon"
                />
                <span className='pluginInfo__contactLinkText'>{t(item.textKey)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='pluginInfo__licenses'>
        <h2 className='pluginInfo__title'>{t('pageAgent.pluginInfo.title4')}</h2>
        <ul className='pluginInfo__list'>
          {licenses.map((item, index) => (
            <li key={index} className='pluginInfo__item'>
              <button
                onClick={() => setSelectedImage(item.href)}
                className='pluginInfo__link pluginInfo__link--button'
              >
                {t(item.textKey)}
              </button>
            </li>
          ))}
        </ul>

        {selectedImage && (
          <div className="pluginInfo__imageModal" onClick={() => setSelectedImage(null)}>
            <img
              src={selectedImage}
              alt="license"
              className='pluginInfo__img'
            />
          </div>
        )}
      </div>
    </section>
  )
}
