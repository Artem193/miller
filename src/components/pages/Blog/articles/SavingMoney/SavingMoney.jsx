import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './savingMoney.scss'

export const SavingMoney = () => {
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
      <main className="savingMoney">
        <ArticleTemplate
          title={t('blog.savingMoney.title')}
          subtitle={t('blog.savingMoney.subtitle')}
          img='pages/blog/savingMoney.webp'
          paragraphCount={4}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 4 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.savingMoney.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 4 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.savingMoney.articleText${i + 1}`) }
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
