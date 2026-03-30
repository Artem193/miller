import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './ciporinPreview.scss'

export const CiporinPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='ciporinPreview'>
      <img
        src={`pages/agentPage/pageAgentPreview__photo6.webp`}
        alt="photo"
        className='ciporinPreview__photo'
      />
      <div className='ciporinPreview__info'>
        <p className='ciporinPreview__name'>{t(`pageAgent.ciporinPreview.name`)}</p>
        <p className='ciporinPreview__text'>{t(`pageAgent.ciporinPreview.text`)}</p>
        <Button
          addClass='ciporinPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
