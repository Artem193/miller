import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './servicePricingCard.scss'

export const ServicePricingCard  = () => {
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
      <main className="servicePricingCard">
        <ArticleTemplate
          title={t('blog.servicePricingCard.title')}
          subtitle={t('blog.servicePricingCard.subtitle')}
          img='pages/blog/servicePricingCard.webp'
          paragraphCount={5}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 5 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.servicePricingCard.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 5 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.servicePricingCard.articleText${i + 1}`) }
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
