import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './investmentRiskExplainer.scss'

export const InvestmentRiskExplainer = () => {
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
      <main className="investmentRiskExplainer">
        <ArticleTemplate
          title={t('blog.investmentRiskExplainer.title')}
          subtitle={t('blog.investmentRiskExplainer.subtitle')}
          img='pages/blog/investmentRiskExplainer.webp'
          paragraphCount={6}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 6 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.investmentRiskExplainer.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 6 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.investmentRiskExplainer.articleText${i + 1}`) }
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