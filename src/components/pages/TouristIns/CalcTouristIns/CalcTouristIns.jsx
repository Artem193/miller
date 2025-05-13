import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { ModalForm } from '../../home/HeroSection/ModalForm/ModalForm';
import './calcTouristIns.scss';

export const CalcTouristIns = () => {
  const { t, i18n } = useTranslation();
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const [form, setForm] = useState({
    age: '18-30',
    duration: '7',
    coverage: 'basic',
    chronic: false,
    pregnancy: false,
    extreme: false,
    medevac: false
  });

  const baseRatePerDay = {
    basic: 13.7,
    extended: 17.5
  };

  const ageFactor = {
    '18-30': 1.0,
    '31-50': 1.3,
    '51+': 1.7
  };

  const calculateInsuranceCost = () => {
    const days = parseInt(form.duration) || 0;
    const baseRate = baseRatePerDay[form.coverage];
    const factor = ageFactor[form.age];

    let cost = days * baseRate * factor;

    if (form.chronic) cost *= 1.5;
    if (form.pregnancy) cost += days * 5;
    if (form.extreme) cost *= 1.3;
    if (form.medevac) cost += days * 1.8;

    return Math.round(cost);
  };

  const dailyPrice = () => {
    const days = parseInt(form.duration);
    return days > 0 ? Math.round(calculateInsuranceCost() / days) : 0;
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  return (
    <section className='calcTouristIns'>
      <h2 className="calcTouristIns__title">{t('touristIns.calcTouristIns.title')}</h2>

      <div className="calcTouristIns__selects">
        <h3 className='calcTouristIns__subtitle'>{t('touristIns.calcTouristIns.subtitle')}</h3>

        <label className="calcTouristIns__label">{t('touristIns.calcTouristIns.label1')}</label>
        <select name="age" value={form.age} onChange={handleChange} className="calcTouristIns__select">
          <option value="18-30">18–30</option>
          <option value="31-50">31–50</option>
          <option value="51+">51+</option>
        </select>

        <label className="calcTouristIns__label">{t('touristIns.calcTouristIns.label2')}</label>
        <input
          type="number"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className="calcTouristIns__select"
        />

        <label className="calcTouristIns__label">{t('touristIns.calcTouristIns.label3')}</label>
        <select name="coverage" value={form.coverage} onChange={handleChange} className="calcTouristIns__select">
          <option value="basic">{t('touristIns.calcTouristIns.basic')}</option>
          <option value="extended">{t('touristIns.calcTouristIns.extended')}</option>
        </select>

        <div className="calcTouristIns__checkboxGroup">
          <label><input type="checkbox" name="chronic" checked={form.chronic} onChange={handleChange} /> {t('touristIns.calcTouristIns.chronic')}</label>
          <label><input type="checkbox" name="pregnancy" checked={form.pregnancy} onChange={handleChange} /> {t('touristIns.calcTouristIns.pregnancy')}</label>
          <label><input type="checkbox" name="extreme" checked={form.extreme} onChange={handleChange} /> {t('touristIns.calcTouristIns.extreme')}</label>
          <label><input type="checkbox" name="medevac" checked={form.medevac} onChange={handleChange} /> {t('touristIns.calcTouristIns.medevac')}</label>
        </div>

        <p className="calcTouristIns__text">
          {t('touristIns.calcTouristIns.totalDays')}: <b>{form.duration}</b>
        </p>
        <p className="calcTouristIns__text">
          {t('touristIns.calcTouristIns.totalCost')}: <b>₪{calculateInsuranceCost()}</b>
        </p>
        <p className="calcTouristIns__text">
          {t('touristIns.calcTouristIns.daily')}: <b>₪{dailyPrice()}</b>
        </p>

        <button
          className="calcTouristIns__button"
          onClick={() => setIsModalFormOpen(true)}
        >
          {t('touristIns.calcTouristIns.button')}
        </button>

        <a href="#form" className='calcTouristIns__link'>{t('touristIns.calcTouristIns.link')}</a>
      </div>

      {isModalFormOpen && <ModalForm onClose={() => setIsModalFormOpen(false)} />}
    </section>
  );
};
