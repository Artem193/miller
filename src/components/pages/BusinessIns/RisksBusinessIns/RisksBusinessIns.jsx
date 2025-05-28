import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { RiskItem } from "./RiskItem/RiskItem";

import './risksBusinessIns.scss'

export const RisksBusinessIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="risksBusinessIns container">
      <h1 className="risksBusinessIns__title">{t('businessIns.risksBusinessIns.title')}</h1>

      <div className='risksBusinessIns__boxesFlex'>
        <div className='risksBusinessIns__boxes'>
          {[1, 2, 3, 4].map((index) => (
            <RiskItem
              key={index}
              subtitle={{ __html: t(`businessIns.risksBusinessIns.subtitle${index}`) }}
              description={t(`businessIns.risksBusinessIns.description${index}`)}
              proof={t(`businessIns.risksBusinessIns.proof${index}`)}
              num={index}
            />
          ))}
        </div>

        <div className='risksBusinessIns__boxes'>
          {[5, 6, 7].map((index) => (
            <RiskItem
              key={index}
              subtitle={{ __html: t(`businessIns.risksBusinessIns.subtitle${index}`) }}
              description={t(`businessIns.risksBusinessIns.description${index}`)}
              proof={t(`businessIns.risksBusinessIns.proof${index}`)}
              num={index}
            />
          ))}
        </div>
      </div>
    </section >
  )
}
