import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './pensionInsurance.scss';

export const PensionInsurance = () => {
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
      <main className="pensionInsurance">
        <ArticleTemplate
          title={t('blog.pensionInsurance.title')}
          subtitle={t('blog.pensionInsurance.subtitle')}
          img='pages/blog/pensionInsurance.png'
          paragraphCount={5}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 5 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.pensionInsurance.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 5 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.pensionInsurance.articleText${i + 1}`) }
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
