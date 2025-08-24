import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './mistakesMortgage.scss'

export const MistakesMortgage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="mistakesMortgage container">
      <h1 className="mistakesMortgage__title">
        {t('mortgageIns.mortgageMistakes.title')}
      </h1>

      <div className="mistakesMortgage__mistakes">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`mistakesMortgage__mistake mistakesMortgage__mistake--${index}`}
          >
            <img
              src={`pages/mortgageIns/mistakesMortgage/mistakesMortgage__img--${index}.svg`}
              alt="icon"
              className={`mistakesMortgage__img`}
            />
            <h2
              className="mistakesMortgage__subtitle"
              dangerouslySetInnerHTML={{ __html: t(`mortgageIns.mortgageMistakes.subtitle${index}`) }}
            >
            </h2>
            <p className="mistakesMortgage__text">
              {t(`mortgageIns.mortgageMistakes.text${index}`)}
            </p>
          </div>
        ))}
        <h2 className="mistakesMortgage__conclusion">
          {t('mortgageIns.mortgageMistakes.conclusion')}
        </h2>
      </div>
    </section >
  )
}
