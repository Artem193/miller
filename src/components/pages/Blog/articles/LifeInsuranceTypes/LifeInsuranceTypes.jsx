import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './lifeInsuranceTypes.scss';

export const LifeInsuranceTypes = () => {
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
      <main className="lifeInsuranceTypes">
        <ArticleTemplate
          title={t('blog.lifeInsuranceTypes.title')}
          subtitle={t('blog.lifeInsuranceTypes.subtitle')}
          img='pages/blog/lifeInsuranceTypes.webp'
          paragraphCount={4}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 4 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.lifeInsuranceTypes.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 4 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.lifeInsuranceTypes.articleText${i + 1}`) }
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
