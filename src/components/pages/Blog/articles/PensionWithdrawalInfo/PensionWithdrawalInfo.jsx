import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './pensionWithdrawalInfo.scss';

export const PensionWithdrawalInfo = () => {
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
      <main className="pensionWithdrawalInfo">
        <ArticleTemplate
          title={t('blog.pensionWithdrawalInfo.title')}
          subtitle={t('blog.pensionWithdrawalInfo.subtitle')}
          img='pages/blog/pensionWithdrawalInfo.webp'
          paragraphCount={8}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 8 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.pensionWithdrawalInfo.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 8 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.pensionWithdrawalInfo.articleText${i + 1}`) }
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
