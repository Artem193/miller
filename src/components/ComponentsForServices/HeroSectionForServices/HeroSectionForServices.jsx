import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './heroSectionForServices.scss'

export const HeroSectionForServices = ({ title1, title2, text, textAddClass, background, button, extraForHeroSectionAddClass, extraForHeroSection }) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className={`heroSectionForServices heroSectionForServices--${background}`}>
      <div className='heroSectionForServices__relative'>
        <div className='heroSectionForServices__head'>
          <div className='heroSectionForServices__yellowLine heroSectionForServices__yellowLine--left'></div>
          <div className='heroSectionForServices__titleFlex'>
            <h1 className='heroSectionForServices__title heroSectionForServices__title--part1'>{title1}</h1>
            <h1 className='heroSectionForServices__title heroSectionForServices__title--part2'>{title2}</h1>
          </div>
          <div className='heroSectionForServices__yellowLine heroSectionForServices__yellowLine--right'></div>
        </div>
      </div>
    <div className={`heroSectionForServices__${extraForHeroSectionAddClass}`}>
      {extraForHeroSection}
    </div>
      <p className={`heroSectionForServices__${textAddClass}`} dangerouslySetInnerHTML={text}></p>
      {button}
    </section>

    // <section className={`heroSectionForServices heroSectionForServices--${background}`}>
    //   <div className='container heroSectionForServices__content'>
    //     <h1 className='heroSectionForServices__title'>{title1} {title2}</h1>
    //     <div className={`heroSectionForServices__${extraForHeroSectionAddClass}`}>
    //       {extraForHeroSection}
    //     </div>
    //     <p className={`heroSectionForServices__${textAddClass}`} dangerouslySetInnerHTML={text}></p>
    //     {button}
    //   </div>
    // </section>
  )
}
