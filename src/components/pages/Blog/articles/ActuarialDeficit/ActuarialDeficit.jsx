import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './actuarialDeficit.scss'

export const ActuarialDeficit = () => {
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
      <main className="actuarialDeficit">
        <ArticleTemplate
          title={t('blog.actuarialDeficit.title')}
          subtitle={t('blog.actuarialDeficit.subtitle')}
          img='pages/blog/actuarialDeficit.webp'
          paragraphCount={4}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 4 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.actuarialDeficit.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 4 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.actuarialDeficit.articleText${i + 1}`) }
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