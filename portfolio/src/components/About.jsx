import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Обо мне</h1>
      <p><strong>Имя:</strong> Едленко Максим </p>
      <p><strong>Специальность:</strong> Веб-разработчик</p>
      <p><strong>Навыки:</strong> HTML, CSS, JavaScript, React</p>
      <p><strong>Интересы:</strong> Веб-разработка, создание сайтов, изучение новых технологий</p>
      
      <button onClick={() => navigate('/')}>
        На главную
      </button>
      <button onClick={() => navigate(-1)}>
        Назад
      </button>
    </div>
  );
}

export default About;