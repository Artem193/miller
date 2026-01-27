import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './assetManagement.scss'

export const AssetManagement  = () => {
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
      <main className="assetManagement">
        <ArticleTemplate
          title={t('blog.assetManagement.title')}
          subtitle={t('blog.assetManagement.subtitle')}
          img='pages/blog/assetManagement.webp'
          paragraphCount={7}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 7 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.assetManagement.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 7 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.assetManagement.articleText${i + 1}`) }
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