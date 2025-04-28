import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './footer.scss'

export const Footer = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__flex'>
          <div className='footer__text'>
            <h2 className='footer__title'>{t('footer.title')}</h2>
            <ul className='footer__list'>
              <div className='footer__flexList'>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.carInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.mortgageInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.travelInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.healthInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.lifeInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.businessInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.internationalTravelInsurance')}</Link>
                </li>
              </div>
              <div className='footer__flexList'>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.accidentInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.propertyInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.financialPlanningAndLoans')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.pensionAssetManagement')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.investmentFunds')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/'>{t('header.rightsRealization')}</Link>
                </li>
              </div>
            </ul>
          </div>
          <Link to='/' className='footer__logo'>
            <img src="/miller/logoForFooter.png" alt="logo" className='footer__logo' />
          </Link>
        </div>
        <p className='footer__copyright'>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
