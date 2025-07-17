import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './permyakovPreview.scss'

export const PermyakovPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='permyakovPreview'>
      <img
        src={`/miller/pages/agentPage/pageAgentPreview__photo3.png`}
        alt="photo"
        className='permyakovPreview__photo'
      />
      <div className='permyakovPreview__info'>
        <p className='permyakovPreview__name'>{t(`pageAgent.permyakovPreview.name`)}</p>
        <p className='permyakovPreview__text'>{t(`pageAgent.permyakovPreview.text`)}</p>
        <Button
          addClass='permyakovPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
