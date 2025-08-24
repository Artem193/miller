import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './coverAccidentIns.scss'

export const CoverAccidentIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <>
      <section className="coverAccidentIns coverAccidentIns__desktop container">
        <h1 className="coverAccidentIns__title">
          {t('accidentIns.coverAccidentIns.title')}
        </h1>

        <div className="coverAccidentIns__boxes">
          <div className="coverAccidentIns__row">
            {[1, 2, 3].map((index) => (
              <div key={index} className="coverAccidentIns__box">
                <div className="coverAccidentIns__circle">
                  <img
                    src={`pages/accidentIns/coverAccidentIns__icon${index}.svg`}
                    alt="icon"
                    className="coverAccidentIns__icon"
                  />
                </div>
                <div className="coverAccidentIns__textContent">
                  <h2 className="coverAccidentIns__subtitle">{t(`accidentIns.coverAccidentIns.subtitle${index}`)}</h2>
                  <p className="coverAccidentIns__text">{t(`accidentIns.coverAccidentIns.text${index}`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="coverAccidentIns__row coverAccidentIns__row--2">
            {[4, 5].map((index) => (
              <div key={index} className="coverAccidentIns__box">
                <div className="coverAccidentIns__circle">
                  <img
                    src={`pages/accidentIns/coverAccidentIns__icon${index}.svg`}
                    alt="icon"
                    className="coverAccidentIns__icon"
                  />
                </div>
                <div className="coverAccidentIns__textContent">
                  <h2 className="coverAccidentIns__subtitle">{t(`accidentIns.coverAccidentIns.subtitle${index}`)}</h2>
                  <p className="coverAccidentIns__text">{t(`accidentIns.coverAccidentIns.text${index}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="coverAccidentIns coverAccidentIns__mobile">
        <h1 className="coverAccidentIns__title">
          {t('accidentIns.coverAccidentIns.title')}
        </h1>

        <div className="coverAccidentIns__boxesMob">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className={`coverAccidentIns__boxMob ${index % 2 === 0 ? 'coverAccidentIns__boxMob--left' : ''}`}>
              <div className="coverAccidentIns__circleMob">
                <img
                  src={`pages/accidentIns/coverAccidentIns__icon${index}.svg`}
                  alt="icon"
                  className="coverAccidentIns__iconMob"
                />
              </div>
              <div className={`coverAccidentIns__textContentMob ${index % 2 === 0 ? 'coverAccidentIns__textContentMob--left' : ''}`}>
                <h2 className="coverAccidentIns__subtitleMob">{t(`accidentIns.coverAccidentIns.subtitle${index}`)}</h2>
                <p className='coverAccidentIns__textMob'>{t(`accidentIns.coverAccidentIns.text${index}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
