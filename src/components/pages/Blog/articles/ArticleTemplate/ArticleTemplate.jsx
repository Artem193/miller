import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import './articleTemplate.scss';

export const ArticleTemplate = ({
  title,
  subtitle,
  img,
  paragraphCount,
  ...props
}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const paragraphs = Array.from({ length: paragraphCount }, (_, i) => i + 1);

  return (
    <div className="articleTemplate container">
      <div className="articleTemplate__head">
        <div className="articleTemplate__head--text">
          <h1 className="articleTemplate__head--title">{title}</h1>
          <h2 className="articleTemplate__head--subtitle">{subtitle}</h2>
        </div>
        <img src={img} alt="banner" className="articleTemplate__head--img" />
      </div>
      <div className="articleTemplate__line"></div>
      {paragraphs.map((num) => (
        <div key={num} className="articleTemplate__article">
          <h3
            className="articleTemplate__article--title"
            dangerouslySetInnerHTML={props[`articleTitle${num}`]}
          />
          <p
            className="articleTemplate__article--text"
            dangerouslySetInnerHTML={props[`articleText${num}`]}
          />
        </div>
      ))}
      <div className="articleTemplate__line"></div>
    </div>
  )
}
