import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

import './calcCarIns.scss'

export const CalcCarIns = () => {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState({
    type: 'Обязательное',
    age: '25-34',
    experience: '3-5',
    carAge: '0-5'
  });

  const basePrices = {
    'Обязательное': 1200,
    'Третьим лицам': 1800,
    'Полное': 3500
  };

  const ageFactor = {
    '18-24': 1.4,
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
    <section className='calcCarIns container'>
      <h2 className="calcCarIns__title">Калькулятор стоимости автостраховки</h2>

      <div className="calcCarIns__selects">
        <label className="calcCarIns__label">Тип страховки:</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="calcCarIns__select"
        >
          {/* <option value="Обязательное">Обязательное (חובה)</option>
          <option value="Третьим лицам">Ответственность перед третьими лицами (צד ג׳)</option>
          <option value="Полное">Полное (מקיף)</option> */}
        </select>

        {/* <label className="block font-medium">Возраст водителя:</label>
        <select name="age" value={form.age} onChange={handleChange} className="w-full border rounded p-2">
          <option value="18-24">18–24 лет</option>
          <option value="25-34">25–34 лет</option>
          <option value="35-49">35–49 лет</option>
          <option value="50+">50 лет и старше</option>
        </select>

        <label className="block font-medium">Стаж вождения:</label>
        <select name="experience" value={form.experience} onChange={handleChange} className="w-full border rounded p-2">
          <option value="0-2">0–2 года</option>
          <option value="3-5">3–5 лет</option>
          <option value="6+">6 лет и более</option>
        </select>

        <label className="block font-medium">Возраст автомобиля:</label>
        <select name="carAge" value={form.carAge} onChange={handleChange} className="w-full border rounded p-2">
          <option value="0-5">0–5 лет</option>
          <option value="6-10">6–10 лет</option>
          <option value="11+">11 лет и старше</option>
        </select> */}
      </div>

      {/* <div className="text-center mt-4">
        <p className="text-lg font-semibold">Оценочная годовая стоимость: ₪{calculatePrice()}</p>
        <p className="text-md text-gray-600">Ориентировочно в месяц: ₪{monthlyPrice()}</p>
        <p className="text-sm text-gray-500 mt-2">* Итоговая сумма зависит от условий страховой компании и может отличаться.</p>
        <button className="mt-3 px-4 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-800">
          Получить персональное предложение
        </button>
      </div> */}

    </section>
  )
}
