import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './millerKristinaPreview.scss'

export const MillerKristinaPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='millerKristinaPreview'>
      <img
        src={`pages/agentPage/pageAgentPreview__photo2.png`}
        alt="photo"
        className='millerKristinaPreview__photo'
      />
      <div className='millerKristinaPreview__info'>
        <p className='millerKristinaPreview__name'>{t(`pageAgent.millerKristinaPreview.name`)}</p>
        <p className='millerKristinaPreview__text'>{t(`pageAgent.millerKristinaPreview.text`)}</p>
        <Button
          addClass='millerKristinaPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
