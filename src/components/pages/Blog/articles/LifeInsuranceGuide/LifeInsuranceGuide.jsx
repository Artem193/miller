import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './lifeInsuranceGuide.scss';

export const LifeInsuranceGuide = () => {
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
      <main className="lifeInsuranceGuide">
        <ArticleTemplate
          title={t('blog.lifeInsuranceGuide.title')}
          subtitle={t('blog.lifeInsuranceGuide.subtitle')}
          img='pages/blog/lifeInsuranceGuide.webp'
          paragraphCount={13}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 13 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.lifeInsuranceGuide.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 13 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.lifeInsuranceGuide.articleText${i + 1}`) }
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
