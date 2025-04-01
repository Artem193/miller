import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './formBigStat.scss';

export const FormBigStat = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <article className='formBigStat'>
      <h3 className='formBigStat__title container'>{t('home.formBigStat.title')}</h3>
      <form className='formBigStat__form'>
        <div className='formBigStat__inputs'></div>
      </form>
    </article>
  )
}
