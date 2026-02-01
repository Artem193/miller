import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './phoenixInvest.scss'

export const PhoenixInvest  = () => {
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
      <main className="phoenixInvest">
        <ArticleTemplate
          title={t('blog.phoenixInvest.title')}
          subtitle={t('blog.phoenixInvest.subtitle')}
          img='pages/blog/phoenixInvest.webp'
          paragraphCount={5}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 5 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.phoenixInvest.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 5 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.phoenixInvest.articleText${i + 1}`) }
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
