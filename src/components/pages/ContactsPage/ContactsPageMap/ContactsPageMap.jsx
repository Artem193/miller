import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './contactsPageMap.scss'

export const ContactsPageMap = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="contactsPageMap container">
      <h1 className="contactsPageMap__title">
        {t('contactsPage.contactsPageMap.title')}
      </h1>

      <iframe
        className="contactsPageMap__iframe"
        src="https://www.google.com/maps?q=43%20Jabotinsky%20St,%20Ramat%20Gan,%20Israel&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map to Office"
      >
      </iframe>
    </section>
  )
}
