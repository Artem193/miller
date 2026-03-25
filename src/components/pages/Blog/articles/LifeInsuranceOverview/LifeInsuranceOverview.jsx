import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './lifeInsuranceOverview.scss';

export const LifeInsuranceOverview = () => {
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
      <main className="lifeInsuranceOverview">
        <ArticleTemplate
          title={t('blog.lifeInsuranceOverview.title')}
          subtitle={t('blog.lifeInsuranceOverview.subtitle')}
          img='pages/blog/lifeInsuranceOverview.webp'
          paragraphCount={8}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 8 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.lifeInsuranceOverview.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 8 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.lifeInsuranceOverview.articleText${i + 1}`) }
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
