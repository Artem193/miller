import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import './modalForm.scss';

export const ModalForm = ({ onClose }) => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '' });

  useEffect(() => {
    document.body.setAttribute('dir', i18n.language === 'he' ? 'rtl' : 'ltr');
  }, [i18n.language]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="modalForm" onClick={onClose}>
      <div className="modalForm__content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalForm__title">Получите консультацию</h2>
        <p className="modalForm__description">Заполните форму, и наш специалист свяжется с Вами</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Ваше имя" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="modalForm__input"
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Ваш телефон" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="modalForm__input"
          />
          <input 
            type="text" 
            name="city" 
            placeholder="Ваш город" 
            value={formData.city} 
            onChange={handleChange} 
            required 
            className="modalForm__input"
          />
          <button type="submit" className="modalForm__submit">Получить консультацию</button>
        </form>
        <div className='modalForm__close' onClick={onClose}></div>
        {/* <button className="modalForm__close" onClick={onClose}>Закрыть</button> */}
      </div>
    </div>
  );
};
