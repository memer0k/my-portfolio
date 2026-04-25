import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    // 3 способ перехода - программный редирект через 2 секунды
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="container">
      <h1>Контакты</h1>
      <p><strong>Email:</strong> medlenko@sfedu.ru</p>
      <p><strong>Телефон:</strong> +7 (952) 123-45-67</p>
      <p><strong>GitHub:</strong> github.com/memer0k</p>
      
      <hr style={{ margin: '20px 0' }} />
      
      <h3>Напишите мне:</h3>
      {!isSent ? (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Ваше имя" 
            style={{
              width: '100%',
              padding: '8px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
            required
          />
          <input 
            type="email" 
            placeholder="Ваш email" 
            style={{
              width: '100%',
              padding: '8px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
            required
          />
          <button type="submit" style={{ width: '100%' }}>
            Отправить
          </button>
        </form>
      ) : (
        <p style={{ color: 'green', textAlign: 'center' }}>
          Спасибо! Перенаправляем на главную...
        </p>
      )}
      
      <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>
        Назад
      </button>
    </div>
  );
}

export default Contact;