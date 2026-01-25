import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './investorRiskProfile.scss'

export const InvestorRiskProfile = () => {
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
      <main className="investorRiskProfile">
        <ArticleTemplate
          title={t('blog.investorRiskProfile.title')}
          subtitle={t('blog.investorRiskProfile.subtitle')}
          img='pages/blog/investorRiskProfile.webp'
          paragraphCount={7}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 7 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.investorRiskProfile.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 7 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.investorRiskProfile.articleText${i + 1}`) }
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