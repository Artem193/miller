import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './policyFeature.scss';

export const PolicyFeature = () => {
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
      <main className="policyFeature">
        <ArticleTemplate
          title={t('blog.policyFeature.title')}
          subtitle={t('blog.policyFeature.subtitle')}
          img='pages/blog/policyFeature.webp'
          paragraphCount={8}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 8 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.policyFeature.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 8 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.policyFeature.articleText${i + 1}`) }
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
