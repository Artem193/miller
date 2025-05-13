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
      <h2 className="calcMortgageIns__title">Рассчитайте стоимость страховки</h2>

      <div className="calcMortgageIns__selects">
        <h3 className='calcMortgageIns__subtitle'>Получите приблизительную стоимость за 30 секунд</h3>

        <label className="calcMortgageIns__label">Сумма кредита (₪)</label>
        <input
          type="text"
          name="loanAmount"
          value={form.loanAmount}
          onChange={handleChange}
          className="calcMortgageIns__select"
        />

        <label className="calcMortgageIns__label">Возраст заёмщика</label>
        <select name="age" value={form.age} onChange={handleChange} className="calcMortgageIns__select">
          <option value="18-34">18–34</option>
          <option value="35-49">35–49</option>
          <option value="50+">50+</option>
        </select>

        <label className="calcMortgageIns__label">Срок ипотеки (лет)</label>
        <select name="term" value={form.term} onChange={handleChange} className="calcMortgageIns__select">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20+">20+</option>
        </select>

        <label className="calcMortgageIns__label">Тип страхования</label>
        <select name="insuranceType" value={form.insuranceType} onChange={handleChange} className="calcMortgageIns__select">
          <option value="Оба">Жизнь + Имущество</option>
          <option value="Жизнь">Только жизнь</option>
          <option value="Имущество">Только имущество</option>
        </select>

        <p className="calcMortgageIns__text">
          Ориентировочная годовая стоимость: <b>₪{calculateMortgageInsurance()}</b>
        </p>
        <p className="calcMortgageIns__text">
          В месяц: <b>₪{monthlyPrice()}</b>
        </p>
        <p className="calcMortgageIns__text">Для точного расчёта и оформления оставьте заявку ниже</p>

        <button
          className="calcMortgageIns__button"
          onClick={() => setIsModalFormOpen(true)}
        >
          Получить консультацию
        </button>

        <a href="#form" className='calcMortgageIns__link'>Перейти к оформлению</a>
      </div>

      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </section>
  );
};
