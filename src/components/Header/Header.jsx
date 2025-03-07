import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ButtonsLanguages } from '../ButtonsLanguages/ButtonsLanguages';

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
    <>
      <header className={openMenu === 'menuMob' ? 'header header--openMenu' : 'header'}>
        <Link to='/' className='header__logo'><img className='header__logo' src='../../../public/logo.svg' alt={t('header.logo')}></img></Link>
        <nav className='nav'>
          <ul className='nav__list'>
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
              <span
                className='nav__link'
                onClick={() => { toggleDropdown('services') }}
                onMouseEnter={() => setOpenDropdown('services')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {t('header.services')}▾
                {openDropdown === 'services' && (
                  <ul className='nav__dropdown'>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.carInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.mortgageInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.travelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.healthInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.lifeInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.businessInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.internationalTravelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.accidentInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.propertyInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.financialPlanningAndLoans')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.pensionAssetManagement')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.investmentFunds')}</Link>
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
                {t('header.ourTeam')}▾
                {openDropdown === 'ourTeam' && (
                  <ul className='nav__dropdown'>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.carInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.mortgageInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.travelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.healthInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.lifeInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.businessInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.internationalTravelInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.accidentInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.propertyInsurance')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.financialPlanningAndLoans')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.pensionAssetManagement')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.investmentFunds')}</Link>
                    </li>
                    <li className='nav__item'>
                      <Link className="nav__link nav__link--dropdown" to='/'>{t('header.rightsRealization')}</Link>
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
          src={openMenu === 'menuMob' ? '../../../public/crossMenu.svg' : '../../../public/burger-menu.svg'}
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
            {t('header.services')}▾
            {openDropdown === 'services' && (
              <ul className='nav__dropdown'>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.carInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.mortgageInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.travelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.healthInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.lifeInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.businessInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.internationalTravelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.accidentInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.propertyInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.financialPlanningAndLoans')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.pensionAssetManagement')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.investmentFunds')}</Link>
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
            {t('header.ourTeam')}▾
            {openDropdown === 'ourTeam' && (
              <ul className='nav__dropdown'>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.carInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.mortgageInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.travelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.healthInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.lifeInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.businessInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.internationalTravelInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.accidentInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.propertyInsurance')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.financialPlanningAndLoans')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.pensionAssetManagement')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.investmentFunds')}</Link>
                </li>
                <li className='nav__item'>
                  <Link className="nav__link nav__link--dropdown" to='/'>{t('header.rightsRealization')}</Link>
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
    </>
  )
}
