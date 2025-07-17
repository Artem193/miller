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
                  <Link className="footer__link" to='/CarInsurance'>{t('header.carInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/MortgageIns'>{t('header.mortgageInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/TouristIns'>{t('header.travelInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/HealthIns'>{t('header.healthInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/LifeIns'>{t('header.lifeInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/BusinessIns'>{t('header.businessInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/TravelIns'>{t('header.internationalTravelInsurance')}</Link>
                </li>
              </div>
              <div className='footer__flexList'>
                <li className='footer__item'>
                  <Link className="footer__link" to='/AccidentIns'>{t('header.accidentInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/PropertyIns'>{t('header.propertyInsurance')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/FinancialPlanning'>{t('header.financialPlanningAndLoans')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/PensionManagement'>{t('header.pensionAssetManagement')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/InvestmentFunds'>{t('header.investmentFunds')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/RealizationOfRights'>{t('header.rightsRealization')}</Link>
                </li>
                <li className='footer__item'>
                  <Link className="footer__link" to='/CustomerSupport'>{t('header.helpCustomers')}</Link>
                </li>
              </div>
            </ul>
          </div>
          <Link to='/' className='footer__logo'>
            <img src="/miller/footer/logoForFooter.png" alt="logo" className='footer__logo' />
          </Link>
        </div>
        <p className='footer__copyright'>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
