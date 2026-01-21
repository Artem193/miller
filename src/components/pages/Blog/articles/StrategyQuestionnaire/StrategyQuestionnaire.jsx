import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './strategyQuestionnaire.scss'

export const StrategyQuestionnaire = () => {
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
      <main className="strategyQuestionnaire">
        <ArticleTemplate
          title={t('blog.strategyQuestionnaire.title')}
          subtitle={t('blog.strategyQuestionnaire.subtitle')}
          img='pages/blog/strategyQuestionnaire.webp'
          paragraphCount={9}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 9 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.strategyQuestionnaire.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 9 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.strategyQuestionnaire.articleText${i + 1}`) }
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
