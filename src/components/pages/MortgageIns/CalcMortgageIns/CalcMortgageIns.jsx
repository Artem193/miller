import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { ModalForm } from '../../home/HeroSection/ModalForm/ModalForm';
import './calcMortgageIns.scss';

export const CalcMortgageIns = () => {
  const { t, i18n } = useTranslation();
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const [form, setForm] = useState({
    insuranceType: 'Оба',
    age: '35-49',
    term: '10',
    loanAmount: '1,000,000'
  });

  const baseLifeInsuranceRate = 0.001;
  const basePropertyInsuranceRate = 0.0015;

  const ageFactor = {
    '18-34': 0.8,
    '35-49': 1.0,
    '50+': 1.5
  };

  const termFactor = {
    '5': 0.8,
    '10': 0.9,
    '15': 1,
    '20+': 1.1
  };

  const calculateMortgageInsurance = () => {
    const loanAmount = parseInt(form.loanAmount.replace(/,/g, '')) || 0;
    const lifePart = form.insuranceType !== 'Имущество'
      ? loanAmount * baseLifeInsuranceRate * ageFactor[form.age] * termFactor[form.term]
      : 0;
    const propertyPart = form.insuranceType !== 'Жизнь'
      ? loanAmount * basePropertyInsuranceRate
      : 0;
    return Math.round(lifePart + propertyPart);
  };

  const monthlyPrice = () => Math.round(calculateMortgageInsurance() / 12);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='calcMortgageIns'>
      <h2 className="calcMortgageIns__title">{t('mortgageIns.calcMortgageIns.title')}</h2>

      <div className="calcMortgageIns__selects">
        <h3 className='calcMortgageIns__subtitle'>{t('mortgageIns.calcMortgageIns.subtitle')}</h3>

        <label className="calcMortgageIns__label">{t('mortgageIns.calcMortgageIns.label1')} (₪)</label>
        <input
          type="text"
          name="loanAmount"
          value={form.loanAmount}
          onChange={handleChange}
          className="calcMortgageIns__select"
        />

        <label className="calcMortgageIns__label">{t('mortgageIns.calcMortgageIns.label2')} </label>
        <select name="age" value={form.age} onChange={handleChange} className="calcMortgageIns__select">
          <option value="18-34">18–34</option>
          <option value="35-49">35–49</option>
          <option value="50+">50+</option>
        </select>

        <label className="calcMortgageIns__label">{t('mortgageIns.calcMortgageIns.label3')} </label>
        <select name="term" value={form.term} onChange={handleChange} className="calcMortgageIns__select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20+">20+</option>
        </select>

        <label className="calcMortgageIns__label">{t('mortgageIns.calcMortgageIns.label4')} </label>
        <select name="insuranceType" value={form.insuranceType} onChange={handleChange} className="calcMortgageIns__select">
          <option value="Оба">{t('mortgageIns.calcMortgageIns.select1')}</option>
          <option value="Жизнь">{t('mortgageIns.calcMortgageIns.select2')}</option>
          <option value="Имущество">{t('mortgageIns.calcMortgageIns.select3')}</option>
        </select>

        <p className="calcMortgageIns__text">
          {t('mortgageIns.calcMortgageIns.text1')}<b>₪{calculateMortgageInsurance()}</b>
        </p>
        <p className="calcMortgageIns__text">
          {t('mortgageIns.calcMortgageIns.text2')}<b>₪{monthlyPrice()}</b>
        </p>
        <p className="calcMortgageIns__text">{t('mortgageIns.calcMortgageIns.text3')}</p>

        <button
          className="calcMortgageIns__button"
          onClick={() => setIsModalFormOpen(true)}
        >
          {t('mortgageIns.calcMortgageIns.button')}
        </button>

        <a href="https://my.migdal.co.il/onlinepurchase/mortgage" target='blanked' className='calcMortgageIns__link'>{t('mortgageIns.calcMortgageIns.link')}</a>
      </div>

      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </section>
  );
};
