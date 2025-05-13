import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

import { ModalForm } from '../../home/HeroSection/ModalForm/ModalForm';

import './calcCarIns.scss'

export const CalcCarIns = () => {
  const { t, i18n } = useTranslation();

  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const [form, setForm] = useState({
    type: 'Обязательное',
    age: '25-34',
    experience: '3-5',
    carAge: '0-5'
  });

  const basePrices = {
    'Обязательное': 1500,
    'Третьим лицам': 1800,
    'Полное': 4000
  };

  const ageFactor = {
    '18-24': 1.6,
    '25-34': 1.2,
    '35-49': 1.0,
    '50+': 0.9
  };

  const experienceFactor = {
    '0-2': 1.3,
    '3-5': 1.1,
    '6+': 1.0
  };

  const carAgeFactor = {
    '0-5': 1.0,
    '6-10': 0.9,
    '11+': 0.8
  };

  const calculatePrice = () => {
    const base = basePrices[form.type];
    const price = base * ageFactor[form.age] * experienceFactor[form.experience] * carAgeFactor[form.carAge];
    return Math.round(price);
  };

  const monthlyPrice = () => {
    return Math.round(calculatePrice() / 12);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (i18n.language === 'he') {
      document.body.setAttribute('dir', 'rtl');
    } else {
      document.body.setAttribute('dir', 'ltr');
    }
  }, [i18n.language]);

  return (
    <section className='calcCarIns'>
      <h2 className="calcCarIns__title">{t('carInsurance.calcCarIns.title')}</h2>

      <div className="calcCarIns__selects">
        <h3 className='calcCarIns__subtitle'>{t('carInsurance.calcCarIns.subtitle')}</h3>
        <label className="calcCarIns__label">{t('carInsurance.calcCarIns.label1')}</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="calcCarIns__select"
        >
          <option value="Обязательное">{t('carInsurance.calcCarIns.option1')}</option>
          <option value="Третьим лицам">{t('carInsurance.calcCarIns.option2')}</option>
          <option value="Полное">{t('carInsurance.calcCarIns.option3')}</option>
        </select>

        <label className="calcCarIns__label">{t('carInsurance.calcCarIns.label2')}</label>
        <select
          name="age"
          value={form.age}
          onChange={handleChange}
          className="calcCarIns__select"
        >
          <option value="18-24">{t('carInsurance.calcCarIns.option4')}</option>
          <option value="25-34">{t('carInsurance.calcCarIns.option5')}</option>
          <option value="35-49">{t('carInsurance.calcCarIns.option6')}</option>
          <option value="50+">{t('carInsurance.calcCarIns.option7')}</option>
        </select>

        <label className="calcCarIns__label">{t('carInsurance.calcCarIns.label3')}</label>
        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="calcCarIns__select"
        >
          <option value="0-2">{t('carInsurance.calcCarIns.option8')}</option>
          <option value="3-5">{t('carInsurance.calcCarIns.option9')}</option>
          <option value="6+">{t('carInsurance.calcCarIns.option10')}</option>
        </select>

        <label className="calcCarIns__label">{t('carInsurance.calcCarIns.label4')}</label>
        <select
          name="carAge"
          value={form.carAge}
          onChange={handleChange}
          className="calcCarIns__select"
        >
          <option value="0-5">{t('carInsurance.calcCarIns.option11')}</option>
          <option value="6-10">{t('carInsurance.calcCarIns.option12')}</option>
          <option value="11+">{t('carInsurance.calcCarIns.option13')}</option>
        </select>

        <p className="calcCarIns__text">
          {t('carInsurance.calcCarIns.text1')}<b>₪{calculatePrice()}</b>
        </p>
        <p className="calcCarIns__text">
          {t('carInsurance.calcCarIns.text2')}
          <b>
            ₪{monthlyPrice()}
          </b>
        </p>
        <p className="calcCarIns__text">
          {t('carInsurance.calcCarIns.text3')}
        </p>
        <button
          className="calcCarIns__button"
          onClick={() => setIsModalFormOpen(true)}
        >
          {t('carInsurance.calcCarIns.button')}
        </button>
        <a href="" className='calcCarIns__link'>{t('carInsurance.calcCarIns.link')}</a>
      </div>
      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </section>
  )
}
