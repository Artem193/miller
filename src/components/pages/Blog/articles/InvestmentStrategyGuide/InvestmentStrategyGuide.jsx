import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './investmentStrategyGuide.scss'

export const InvestmentStrategyGuide = () => {
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
      <main className="investmentStrategyGuide">
        <ArticleTemplate
          title={t('blog.investmentStrategyGuide.title')}
          subtitle={t('blog.investmentStrategyGuide.subtitle')}
          img='pages/blog/investmentStrategyGuide.webp'
          paragraphCount={7}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 7 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.investmentStrategyGuide.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 7 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.investmentStrategyGuide.articleText${i + 1}`) }
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