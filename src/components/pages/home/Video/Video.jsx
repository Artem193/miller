import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './video.scss'

export const Video = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <div className='video container'>
      <iframe
        src={`https://www.youtube.com/embed/zOuWj_Mh5K4`}
        title="YouTube Video"
        allowFullScreen
        className='video__iframe'
      ></iframe>
    </div>
  )
};
