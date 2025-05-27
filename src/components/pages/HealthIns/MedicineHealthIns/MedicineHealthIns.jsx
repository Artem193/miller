import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './medicineHealthIns.scss';

export const MedicineHealthIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="medicineHealthIns container">
      <h1 className="medicineHealthIns__title">
        {t('healthIns.medicineHealthIns.title')}
      </h1>

      <div className="medicineHealthIns__comparison">
        <div className="medicineHealthIns__withoutIns">
          <div
            className="medicineHealthIns__box medicineHealthIns__box--withoutIns">
            <h2 className="medicineHealthIns__subtitle">
              {t('healthIns.medicineHealthIns.subtitle1')}
            </h2>
            <ul className="medicineHealthIns__list">
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item1')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain1')}
              </li>
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item2')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain2')}
              </li>
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item3')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain3')}
              </li>
            </ul>
          </div>
        </div>

        <div className="medicineHealthIns__withIns">
          <div className="medicineHealthIns__box medicineHealthIns__box--withIns">
            <h2 className="medicineHealthIns__subtitle">
              {t('healthIns.medicineHealthIns.subtitle2')}
            </h2>
            <ul className="medicineHealthIns__list">
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item4')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain4')}
              </li>
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item5')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain5')}
              </li>
              <li className="medicineHealthIns__item">
                <span className="medicineHealthIns__item--bold">{t('healthIns.medicineHealthIns.item6')}</span>
                <br />
                {t('healthIns.medicineHealthIns.explain6')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
