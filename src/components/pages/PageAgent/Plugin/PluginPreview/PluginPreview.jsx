import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { Button } from '../../../home/HeroSection/Button/Button';

import './pluginPreview.scss'

export const PluginPreview = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='pluginPreview'>
      <img
        src={`pages/agentPage/pageAgentPreview__photo4.webp`}
        alt="photo"
        className='pluginPreview__photo'
      />
      <div className='pluginPreview__info'>
        <p className='pluginPreview__name'>{t(`pageAgent.pluginPreview.name`)}</p>
        <p className='pluginPreview__text'>{t(`pageAgent.pluginPreview.text`)}</p>
        <Button
          addClass='pluginPreview__button'
          textButton={t('mortgageIns.heroSection.button')}
        />
      </div>
    </section>
  )
}
