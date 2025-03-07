import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import './aboutUs.scss';

export const AboutUs = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <div>about</div>
  )
}
