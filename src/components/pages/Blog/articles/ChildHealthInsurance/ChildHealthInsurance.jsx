import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import { Header } from '../../../../Header/Header';
import { ArticleTemplate } from "../ArticleTemplate/ArticleTemplate";
import { Contacts } from '../../../home/Contacts/Contacts';
import { Footer } from '../../../../Footer/Footer';

import './childHealthInsurance.scss'

export const ChildHealthInsurance = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  const kristinaUrl = "/MillerKristina";

  const html = (key) => ({ __html: t(key) });

  const htmlWithKristinaLink = (key) => {
    const raw = t(key);

    if (raw.includes("{KM}")) {
      return {
        __html: raw.replace(
          "{KM}",
          `<a href="${kristinaUrl}" class="inline-link">${t("blog.childHealthInsurance.articleText10_name")}</a>`
        ),
      };
    }
  }

  return (
    <>
      <Header />
      <main className="childHealthInsurance">
        <ArticleTemplate
          title={t("blog.childHealthInsurance.title")}
          subtitle={t("blog.childHealthInsurance.subtitle")}
          img="pages/blog/childHealthInsurance.webp"
          paragraphCount={10}
          {...Object.fromEntries([
            ...Array.from({ length: 10 }, (_, i) => [
              `articleTitle${i + 1}`,
              html(`blog.childHealthInsurance.articleTitle${i + 1}`),
            ]),

            ...Array.from({ length: 10 }, (_, i) => {
              const idx = i + 1;
              const key = `blog.childHealthInsurance.articleText${idx}`;

              if (idx === 10) {
                return [`articleText${idx}`, htmlWithKristinaLink(key)];
              }

              return [`articleText${idx}`, html(key)];
            }),
          ])}
        />
      </main>
      <Contacts />
      <Footer />
    </>
  )
}
