import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './passivePensionManagement.scss'

export const PassivePensionManagement = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="passivePensionManagement container">
      <h1 className="passivePensionManagement__title">
        {t('pensionManagement.passivePensionManagement.title')}
      </h1>

      <div className="passivePensionManagement__flex">
        <img
          src="pages/pensionManagement/passivePensionManagement__img.png"
          alt="money"
          className="passivePensionManagement__img"
        />
        <p className="passivePensionManagement__text" dangerouslySetInnerHTML={{ __html: (t('pensionManagement.passivePensionManagement.text'))}}></p>
      </div>
    </section>
  )
}
