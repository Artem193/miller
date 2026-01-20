import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import './general.scss';

export const General = () => {
  const { t, i18n } = useTranslation();

  const articles = [
    { id: 1, path: '/PensionInsurance' },
    { id: 2, path: '/CarInsurancePersonal' },
    { id: 3, path: '/ActuarialDeficit' },
    { id: 4, path: '/SavingMoney' },
    { id: 5, path: '/InvestmentTips' },
    { id: 6, path: '/InvestmentStrategyGuide' },
  ]

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="general container">
      <h1 className="general__title">{t('blog.general.title')}</h1>
      <div className="general__articles">
        {articles.map((article, index) => (
          <Link to={article.path} key={article.id} className="general__link">
            <div className="general__preview">
              <img
                src={`pages/blog/previews/img${index + 1}.webp`}
                alt="preview"
                className="general__img"
              />
              <p className="general__text">{t(`blog.general.text${index + 1}`)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section >
  )
}
