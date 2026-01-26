import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './liquidityImportance.scss'

export const LiquidityImportance  = () => {
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
      <main className="liquidityImportance">
        <ArticleTemplate
          title={t('blog.liquidityImportance.title')}
          subtitle={t('blog.liquidityImportance.subtitle')}
          img='pages/blog/liquidityImportance.webp'
          paragraphCount={6}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 6 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.liquidityImportance.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 6 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.liquidityImportance.articleText${i + 1}`) }
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