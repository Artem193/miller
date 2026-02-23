import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './cancerCoverageConditions.scss';

export const CancerCoverageConditions = () => {
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
      <main className="cancerCoverageConditions">
        <ArticleTemplate
          title={t('blog.cancerCoverageConditions.title')}
          subtitle={t('blog.cancerCoverageConditions.subtitle')}
          img='pages/blog/cancerCoverageConditions.webp'
          paragraphCount={12}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 12 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.cancerCoverageConditions.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 12 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.cancerCoverageConditions.articleText${i + 1}`) }
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
