import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

import { ContactsPageContacts } from './ContactsPageContacts/ContactsPageContacts';
import { ContactsPageMap } from './ContactsPageMap/ContactsPageMap';

import './contactsPage.scss'

import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';

export const ContactsPage = () => {
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
      <main className='contactsPage'>
        <ContactsPageContacts />
        <ContactsPageMap />
      </main>
      <Footer />
    </>
  )
}
