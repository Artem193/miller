import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './helpCustomerSupport.scss'

export const HelpCustomerSupport = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className="helpCustomerSupport container">
      <h1 className="helpCustomerSupport__title">
        {t('customerSupport.helpCustomerSupport.title')}
      </h1>

      <div className="helpCustomerSupport__items helpCustomerSupport__items--mobile">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="helpCustomerSupport__item">
            <img
              src={`pages/customerSupport/helpCustomerSupport__icon${index}.webp`}
              alt="icon"
              className={`helpCustomerSupport__icon helpCustomerSupport__icon--${index}`}
            />
            <h2
              className={`helpCustomerSupport__subtitle helpCustomerSupport__subtitle--${index}`}
              dangerouslySetInnerHTML={{ __html: t(`customerSupport.helpCustomerSupport.subtitle${index}`) }}
            >
            </h2>
            <p className={`helpCustomerSupport__text helpCustomerSupport__text--${index}`}>{t(`customerSupport.helpCustomerSupport.text${index}`)}</p>
          </div>
        ))}
      </div>

      <div className="helpCustomerSupport__items helpCustomerSupport__items--desktop">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <>
            <img
              src={`pages/customerSupport/helpCustomerSupport__icon${index}.webp`}
              alt="icon"
              className={`helpCustomerSupport__icon helpCustomerSupport__icon--${index}`}
            />
            <h2
              className={`helpCustomerSupport__subtitle helpCustomerSupport__subtitle--${index}`}
              dangerouslySetInnerHTML={{ __html: t(`customerSupport.helpCustomerSupport.subtitle${index}`) }}
            >
            </h2>
            <p className={`helpCustomerSupport__text helpCustomerSupport__text--${index}`}>{t(`customerSupport.helpCustomerSupport.text${index}`)}</p>
          </>
        ))}
      </div>
    </section>
  )
}
