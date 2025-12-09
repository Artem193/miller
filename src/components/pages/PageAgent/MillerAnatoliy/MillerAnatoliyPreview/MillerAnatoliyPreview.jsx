import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './millerAnatoliyPreview.scss'

export const MillerAnatoliyPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='millerAnatoliyPreview'>
      <img
        src={`pages/agentPage/pageAgentPreview__photo1.webp`}
        alt="photo"
        className='millerAnatoliyPreview__photo'
      />
      <div className='millerAnatoliyPreview__info'>
        <p className='millerAnatoliyPreview__name'>{t(`pageAgent.millerAnatoliyPreview.name`)}</p>
        <p className='millerAnatoliyPreview__text'>{t(`pageAgent.millerAnatoliyPreview.text`)}</p>
        <Button
          addClass='millerAnatoliyPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
