import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './criticalIllnessSurvivalDays.scss';

export const CriticalIllnessSurvivalDays = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <>
      <Header />
      <main className="criticalIllnessSurvivalDays">
        <ArticleTemplate
          title={t('blog.criticalIllnessSurvivalDays.title')}
          subtitle={t('blog.criticalIllnessSurvivalDays.subtitle')}
          img='pages/blog/criticalIllnessSurvivalDays.webp'
          paragraphCount={10}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 10 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.criticalIllnessSurvivalDays.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 10 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.criticalIllnessSurvivalDays.articleText${i + 1}`) }
              ])
            ]
          )
          }
        />
      </main>
      <Contacts />
      <Footer />
    </>
  )
}
