import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whyInsuranceForTourist.scss';

export const WhyInsuranceForTourist = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="whyInsuranceForTourist container">
      <h1 className="whyInsuranceForTourist__title">
        {t('touristIns.whyInsuranceForTourist.title')}
      </h1>

      <div className="whyInsuranceForTourist__comparison">
        <div className="whyInsuranceForTourist__withoutIns">
          <div
            className="whyInsuranceForTourist__box whyInsuranceForTourist__box--withoutIns">
            <h2 className="whyInsuranceForTourist__subtitle">
              {t('touristIns.whyInsuranceForTourist.subtitle1')}
            </h2>
            <ul className="whyInsuranceForTourist__list">
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item1')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item2')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item3')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item4')}
              </li>
            </ul>
          </div>
        </div>

        <div className="whyInsuranceForTourist__withIns">
          <div className="whyInsuranceForTourist__box whyInsuranceForTourist__box--withIns">
            <h2 className="whyInsuranceForTourist__subtitle">
              {t('touristIns.whyInsuranceForTourist.subtitle2')}
            </h2>
            <ul className="whyInsuranceForTourist__list">
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item5')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item6')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item7')}
              </li>
              <li className="whyInsuranceForTourist__item">
                {t('touristIns.whyInsuranceForTourist.item8')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="whyInsuranceForTourist__conclusion">
        <p className="whyInsuranceForTourist__text">
          {t('touristIns.whyInsuranceForTourist.text')}
        </p>
      </div>
    </section>
  )
}
