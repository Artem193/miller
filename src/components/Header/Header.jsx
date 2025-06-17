import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonsLanguages } from '../ButtonsLanguages/ButtonsLanguages';
import { Accessibility } from '../Accessibility/Accessibility';
import { Buttons } from './Buttons/Buttons';

import './header.scss'

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const toggleDropdown = (itemList) => {
    setOpenDropdown((openDropdown === itemList ? null : itemList))
  }

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <div className='containerMob'>
      <Buttons />
      <header className={openMenu === 'menuMob' ? 'header header--openMenu' : 'header'}>
        <Link to='/' className='header__logo'><img className='header__logo' src='/miller/header/logo.svg' alt={t('header.logo')}></img></Link>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link
                className={`nav__link ${location.pathname.endsWith('/miller/') ? 'nav__link--active' : ''}`}
                to='/'
              >
                {t('header.basic')}
              </Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>{t('header.aboutUs')}</Link>
            </li>
            <li className='nav__item'>
              <span
                className='nav__link'
                onClick={() => { toggleDropdown('services') }}
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {t('header.services')}<span className={openDropdown === 'services' ? 'nav__arrow nav__arrow--open' : 'nav__arrow'}>▾</span>
                {openDropdown === 'services' && (
                  <ul className='nav__dropdown'>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/CarInsurance'>{t('header.carInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/MortgageIns'>{t('header.mortgageInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/TouristIns'>{t('header.travelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/HealthIns'>{t('header.healthInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/LifeIns'>{t('header.lifeInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/BusinessIns'>{t('header.businessInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/TravelIns'>{t('header.internationalTravelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/AccidentIns'>{t('header.accidentInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/PropertyIns'>{t('header.propertyInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/FinancialPlanning'>{t('header.financialPlanningAndLoans')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/PensionManagement'>{t('header.pensionAssetManagement')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/InvestmentFunds'>{t('header.investmentFunds')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.rightsRealization')}</Link>
                    </li>
                  </ul>
                )}
              </span>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>{t('header.helpCustomers')}</Link>
            </li>
            <li className='nav__item'>
              <span
                className='nav__link'
                onClick={() => { toggleDropdown('ourTeam') }}
                onMouseEnter={() => setOpenDropdown('ourTeam')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {t('header.ourTeam')}<span className={openDropdown === 'ourTeam' ? 'nav__arrow nav__arrow--open' : 'nav__arrow'}>▾</span>
                {openDropdown === 'ourTeam' && (
                  <ul className='nav__dropdown'>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.AnatolyMiller')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.KristinaMiller')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Permyakov')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Plugin')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Povolotsky')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Pinkasovich')}</Link>
                    </li>
                  </ul>
                )}
              </span>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>{t('header.blog')}</Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link' to='/'>{t('header.contacts')}</Link>
            </li>
          </ul>
        </nav>
        <ButtonsLanguages />
        <img
          className={openMenu === 'menuMob' ? 'header__burger-menu header__burger-menu--open' : 'header__burger-menu'}
          src={openMenu === 'menuMob' ? '/miller/header/crossMenu.svg' : '/miller/header/burger-menu.svg'}
          alt={t('header.menu')}
          onClick={() => { toggleMenu('menuMob') }}
        ></img>
      </header>
      <ul className={openMenu === 'menuMob' ? 'menuMobList menuMobList--open' : 'menuMobList'}>
        <li className='nav__item'>
          <Link
            className={`nav__link ${location.pathname === '/' ? 'nav__link--active' : ''}`}
            to='/'
          >
            {t('header.basic')}
          </Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>{t('header.aboutUs')}</Link>
        </li>
        <li className='nav__item'>
          <span className='nav__link' onClick={() => { toggleDropdown('services') }}>
            {t('header.services')}<span className={openDropdown === 'services' ? 'nav__arrow nav__arrow--open' : 'nav__arrow'}>▾</span>
            {openDropdown === 'services' && (
              <ul className='nav__dropdown'>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/CarInsurance'>{t('header.carInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/MortgageIns'>{t('header.mortgageInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/TouristIns'>{t('header.travelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/HealthIns'>{t('header.healthInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/LifeIns'>{t('header.lifeInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/BusinessIns'>{t('header.businessInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/TravelIns'>{t('header.internationalTravelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/AccidentIns'>{t('header.accidentInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/PropertyIns'>{t('header.propertyInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/FinancialPlanning'>{t('header.financialPlanningAndLoans')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/PensionManagement'>{t('header.pensionAssetManagement')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/InvestmentFunds'>{t('header.investmentFunds')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.rightsRealization')}</Link>
                </li>
              </ul>
            )}
          </span>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>{t('header.helpCustomers')}</Link>
        </li>
        <li className='nav__item'>
          <span className='nav__link' onClick={() => { toggleDropdown('ourTeam') }}>
            {t('header.ourTeam')}<span className={openDropdown === 'ourTeam' ? 'nav__arrow nav__arrow--open' : 'nav__arrow'}>▾</span>
            {openDropdown === 'ourTeam' && (
              <ul className='nav__dropdown'>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.AnatolyMiller')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.KristinaMiller')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Permyakov')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Plugin')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Povolotsky')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.Pinkasovich')}</Link>
                </li>
              </ul>
            )}
          </span>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>{t('header.blog')}</Link>
        </li>
        <li className='nav__item'>
          <Link className='nav__link' to='/'>{t('header.contacts')}</Link>
        </li>
      </ul>
      <Accessibility />
    </div>
  )
}
