import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './typesOfLifeIns.scss'

export const TypesOfLifeIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="typesOfLifeIns container">
      <h1 className="typesOfLifeIns__title">{t('lifeIns.typesOfLifeIns.title')}</h1>

      <div className="typesOfLifeIns__boxes">
        {[1, 2, 3].map((index) => (
          <div key={index} className="typesOfLifeIns__box">
            <img
              src={`/miller/pages/lifeIns/typesOfLifeIns__icon${index}.svg`}
              alt="icon"
              className="typesOfLifeIns__icon"
            />
            <h2
              className='typesOfLifeIns__subtitle'
              dangerouslySetInnerHTML={{ __html: t(`lifeIns.typesOfLifeIns.subtitle${index}`) }}
            />
            <p className="typesOfLifeIns__text">{t(`lifeIns.typesOfLifeIns.text${index}`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}