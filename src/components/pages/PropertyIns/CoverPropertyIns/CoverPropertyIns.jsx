import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './coverPropertyIns.scss'

export const CoverPropertyIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <>
      <section className="coverPropertyIns coverPropertyIns__desktop container">
        <h1 className="coverPropertyIns__title">
          {t('propertyIns.coverPropertyIns.title')}
        </h1>

        <div className="coverPropertyIns__boxes">
          <div className="coverPropertyIns__row">
            {[1, 2, 3].map((index) => (
              <div key={index} className="coverPropertyIns__box">
                <div className="coverPropertyIns__circle">
                  <img
                    src={`/miller/pages/propertyIns/coverPropertyIns__icon${index}.svg`}
                    alt="icon"
                    className="coverPropertyIns__icon"
                  />
                </div>
                <div className="coverPropertyIns__textContent">
                  <h2 className="coverPropertyIns__subtitle">{t(`propertyIns.coverPropertyIns.subtitle${index}`)}</h2>
                  <p className="coverPropertyIns__text">{t(`propertyIns.coverPropertyIns.text${index}`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="coverPropertyIns__row">
            {[4, 5, 6].map((index) => (
              <div key={index} className="coverPropertyIns__box">
                <div className="coverPropertyIns__circle">
                  <img
                    src={`/miller/pages/propertyIns/coverPropertyIns__icon${index}.svg`}
                    alt="icon"
                    className="coverPropertyIns__icon"
                  />
                </div>
                <div className="coverPropertyIns__textContent">
                  <h2 className="coverPropertyIns__subtitle">{t(`propertyIns.coverPropertyIns.subtitle${index}`)}</h2>
                  <p className="coverPropertyIns__text">{t(`propertyIns.coverPropertyIns.text${index}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coverPropertyIns coverPropertyIns__mobile">
        <h1 className="coverPropertyIns__title">
          {t('propertyIns.coverPropertyIns.title')}
        </h1>

        <div className="coverPropertyIns__boxesMob">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className={`coverPropertyIns__boxMob ${index % 2 === 0 ? 'coverPropertyIns__boxMob--left' : ''}`}>
              <div className="coverPropertyIns__circleMob">
                <img
                  src={`/miller/pages/propertyIns/coverPropertyIns__icon${index}.svg`}
                  alt="icon"
                  className="coverPropertyIns__iconMob"
                />
              </div>
              <div className={`coverPropertyIns__textContentMob ${index % 2 === 0 ? 'coverPropertyIns__textContentMob--left' : ''}`}>
                <h2 className="coverPropertyIns__subtitleMob">{t(`propertyIns.coverPropertyIns.subtitle${index}`)}</h2>
                <p className='coverPropertyIns__textMob'>{t(`propertyIns.coverPropertyIns.text${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
