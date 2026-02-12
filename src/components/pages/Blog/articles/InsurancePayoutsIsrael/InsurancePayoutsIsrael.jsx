import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './insurancePayoutsIsrael.scss';

export const InsurancePayoutsIsrael = () => {
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
      <main className="insurancePayoutsIsrael">
        <ArticleTemplate
          title={t('blog.insurancePayoutsIsrael.title')}
          subtitle={t('blog.insurancePayoutsIsrael.subtitle')}
          img='pages/blog/insurancePayoutsIsrael.webp'
          paragraphCount={7}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 7 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.insurancePayoutsIsrael.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 7 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.insurancePayoutsIsrael.articleText${i + 1}`) }
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
