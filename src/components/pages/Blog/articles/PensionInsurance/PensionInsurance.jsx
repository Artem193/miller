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
          articleTitle1={t('blog.pensionInsurance.articleTitle1')}
          articleText1={t('blog.pensionInsurance.articleText1')}

          articleTitle2={t('blog.pensionInsurance.articleTitle2')}
          articleText2={t('blog.pensionInsurance.articleText2')}

          articleTitle3={t('blog.pensionInsurance.articleTitle3')}
          articleText3={t('blog.pensionInsurance.articleText3')}

          articleTitle4={t('blog.pensionInsurance.articleTitle4')}
          articleText4={t('blog.pensionInsurance.articleText4')}

          articleTitle5={t('blog.pensionInsurance.articleTitle5')}
          articleText5={t('blog.pensionInsurance.articleText5')}
        />
      </main>
      <Contacts />
      <Footer />
    </>
  )
}
