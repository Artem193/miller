import { useTranslation } from "react-i18next";
import { useEffect, useRef, useCallback } from "react";

import './includeRealizationOfRights.scss'

export const IncludeRealizationOfRights = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const svgRef = useRef(null);

  const drawLines = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelectorAll('line');
    lines.forEach(line => line.remove());

    for (let i = 1; i <= 6; i++) {
      const dot = document.querySelector(`.includeRealizationOfRights__dot--${i}`);
      const item = document.querySelector(`.includeRealizationOfRights__item--${i}`);

      if (dot && item && svg) {
        const dotRect = dot.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();

        const x1 = dotRect.left + dotRect.width / 2 - svgRect.left;
        const y1 = dotRect.top + dotRect.height / 2 - svgRect.top;
        const x2 = itemRect.left + 20 - svgRect.left;
        const y2 = itemRect.top + itemRect.height / 2 - svgRect.top;

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "#5AA7FC");
        line.setAttribute("stroke-width", "2");
        svg.appendChild(line);
      }
    }
  }, []);

  useEffect(() => {
    drawLines();
    window.addEventListener('resize', drawLines);
    return () => window.removeEventListener('resize', drawLines);
  }, [drawLines]);

  return (
    <section className="includeRealizationOfRights container">
      <svg ref={svgRef} className="includeRealizationOfRights__svg" />
      <h1 className="includeRealizationOfRights__title">
        {t('realizationOfRights.includeRealizationOfRights.title')}
        {[...Array(6)].map((_, i) => (
          <span key={i} className={`includeRealizationOfRights__dot includeRealizationOfRights__dot--${i + 1}`}></span>
        ))}
      </h1>
      <ul className="includeRealizationOfRights__list">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <li key={index} className={`includeRealizationOfRights__item includeRealizationOfRights__item--${index}`}>
            <span className="includeRealizationOfRights__circle">{index}</span>
            <div className="includeRealizationOfRights__textContent">
              <h2 className="includeRealizationOfRights__subtitle">{t(`realizationOfRights.includeRealizationOfRights.subtitle${index}`)}</h2>
              <p className="includeRealizationOfRights__description">{t(`realizationOfRights.includeRealizationOfRights.description${index}`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
