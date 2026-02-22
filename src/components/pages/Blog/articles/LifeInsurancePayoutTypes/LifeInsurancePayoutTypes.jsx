import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './lifeInsurancePayoutTypes.scss';

export const LifeInsurancePayoutTypes = () => {
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
      <main className="lifeInsurancePayoutTypes">
        <ArticleTemplate
          title={t('blog.lifeInsurancePayoutTypes.title')}
          subtitle={t('blog.lifeInsurancePayoutTypes.subtitle')}
          img='pages/blog/lifeInsurancePayoutTypes.webp'
          paragraphCount={10}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 10 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.lifeInsurancePayoutTypes.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 10 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.lifeInsurancePayoutTypes.articleText${i + 1}`) }
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
