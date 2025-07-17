import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './povolotskyPreview.scss'

export const PovolotskyPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='povolotskyPreview'>
      <img
        src={`/miller/pages/agentPage/pageAgentPreview__photo5.png`}
        alt="photo"
        className='povolotskyPreview__photo'
      />
      <div className='povolotskyPreview__info'>
        <p className='povolotskyPreview__name'>{t(`pageAgent.povolotskyPreview.name`)}</p>
        <p className='povolotskyPreview__text'>{t(`pageAgent.povolotskyPreview.text`)}</p>
        <Button
          addClass='povolotskyPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
