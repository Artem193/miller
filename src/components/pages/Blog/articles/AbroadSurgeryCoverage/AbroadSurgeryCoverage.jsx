import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './abroadSurgeryCoverage.scss';

export const AbroadSurgeryCoverage = () => {
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
      <main className="abroadSurgeryCoverage">
        <ArticleTemplate
          title={t('blog.abroadSurgeryCoverage.title')}
          subtitle={t('blog.abroadSurgeryCoverage.subtitle')}
          img='pages/blog/abroadSurgeryCoverage.webp'
          paragraphCount={6}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 6 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.abroadSurgeryCoverage.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 6 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.abroadSurgeryCoverage.articleText${i + 1}`) }
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
