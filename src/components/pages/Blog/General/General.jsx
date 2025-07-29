import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './general.scss';

export const General = () => {
  const { t, i18n } = useTranslation();

  const arrayPrev = [1, 2, 3, 4];

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className="general container">
      <h1 className="general__title">{t('blog.general.title')}</h1>
      <div className="general__articles">
        {arrayPrev.map((index) => (
          <div key={index} className="general__preview">
            <img
              src={`/miller/pages/blog/previews/img${index}.png`}
              alt="preview"
              className="general__img"
            />
            <p className="general__text">{t(`blog.general.text${index}`)}</p>
            <a href="/" className="general__link">{t('blog.general.link')}</a>
          </div>
        ))}
      </div>
    </section>
  )
}