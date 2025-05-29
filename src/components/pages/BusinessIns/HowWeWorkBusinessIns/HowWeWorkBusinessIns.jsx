import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './howWeWorkBusinessIns.scss'

export const HowWeWorkBusinessIns = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="howWeWorkBusinessIns container">
      <h1 className="howWeWorkBusinessIns__title">{t('businessIns.howWeWorkBusinessIns.title')}</h1>
      <p className="howWeWorkBusinessIns__text" dangerouslySetInnerHTML={{ __html: t('businessIns.howWeWorkBusinessIns.text') }}></p>
    </section >
  )
}
