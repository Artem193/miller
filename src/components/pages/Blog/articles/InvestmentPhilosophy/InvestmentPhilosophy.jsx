import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './investmentPhilosophy.scss'

export const InvestmentPhilosophy  = () => {
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
      <main className="investmentPhilosophy">
        <ArticleTemplate
          title={t('blog.investmentPhilosophy.title')}
          subtitle={t('blog.investmentPhilosophy.subtitle')}
          img='pages/blog/investmentPhilosophy.webp'
          paragraphCount={3}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 3 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.investmentPhilosophy.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 3 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.investmentPhilosophy.articleText${i + 1}`) }
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
