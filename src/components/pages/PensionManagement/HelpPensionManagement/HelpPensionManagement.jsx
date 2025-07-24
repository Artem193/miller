import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './helpPensionManagement.scss'

export const HelpPensionManagement = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="helpPensionManagement container">
      <h1 className="helpPensionManagement__title">
        {t('pensionManagement.helpPensionManagement.title')}
      </h1>

      <div className="helpPensionManagement__items">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="helpPensionManagement__item">
            <img
              src={`/miller/pages/pensionManagement/helpPensionManagement__icon${index}.png`}
              alt="icon"
              className="helpPensionManagement__icon"
            />
            <h2 className="helpPensionManagement__subtitle" dangerouslySetInnerHTML={{ __html: t(`pensionManagement.helpPensionManagement.subtitle${index}`)}}></h2>
            <p className="helpPensionManagement__text">{t(`pensionManagement.helpPensionManagement.text${index}`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
