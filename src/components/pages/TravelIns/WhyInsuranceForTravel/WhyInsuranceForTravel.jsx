import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './whyInsuranceForTravel.scss';

export const WhyInsuranceForTravel = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="whyInsuranceForTravel container">
      <h1 className="whyInsuranceForTravel__title">
        {t('travelIns.whyInsuranceForTravel.title')}
      </h1>

      <div className="whyInsuranceForTravel__comparison">
        <div className="whyInsuranceForTravel__withoutIns">
          <div
            className="whyInsuranceForTravel__box whyInsuranceForTravel__box--withoutIns">
            <h2 className="whyInsuranceForTravel__subtitle">
              {t('travelIns.whyInsuranceForTravel.subtitle1')}
            </h2>
            <ul className="whyInsuranceForTravel__list">
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item1')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item2')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item3')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item4')}
              </li>
            </ul>
          </div>
        </div>

        <div className="whyInsuranceForTravel__withIns">
          <div className="whyInsuranceForTravel__box whyInsuranceForTravel__box--withIns">
            <h2 className="whyInsuranceForTravel__subtitle">
              {t('travelIns.whyInsuranceForTravel.subtitle2')}
            </h2>
            <ul className="whyInsuranceForTravel__list">
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item5')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item6')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item7')}
              </li>
              <li className="whyInsuranceForTravel__item">
                {t('travelIns.whyInsuranceForTravel.item8')}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="whyInsuranceForTravel__conclusion">
        <a
          href="https://buy.passportcard.co.il/existing?AffiliateId=lUUDbiP5PwSOlR%2Fh0kXUIw%3D%3D"
          className="whyInsuranceForTravel__link"
          target="blanked"
        >
          {t('travelIns.whyInsuranceForTravel.link1')}
        </a>

        <a
          href="https://digital.harel-group.co.il/travel-policy?guid=bee1d408-c6a7-410e-b4ee-ac690224bdd3&an=011596"
          className="whyInsuranceForTravel__link"
          target="blanked"
        >
          {t('travelIns.whyInsuranceForTravel.link2')}
        </a>
      </div>
    </section>
  )
}
