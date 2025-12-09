import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './carInsurancePersonal.scss'

export const CarInsurancePersonal = () => {
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
      <main className="carInsurancePersonal">
        <ArticleTemplate
          title={t('blog.carInsurancePersonal.title')}
          subtitle={t('blog.carInsurancePersonal.subtitle')}
          img='pages/blog/carInsurancePersonal.webp'
          paragraphCount={2}
          {
          ...Object.fromEntries(
            [
              ...Array.from({ length: 2 }, (_, i) => [
                `articleTitle${i + 1}`,
                { __html: t(`blog.carInsurancePersonal.articleTitle${i + 1}`) }
              ]),
              ...Array.from({ length: 2 }, (_, i) => [
                `articleText${i + 1}`,
                { __html: t(`blog.carInsurancePersonal.articleText${i + 1}`) }
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