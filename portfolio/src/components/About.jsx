import { useNavigate } from 'react-router-dom';
import myPhoto from '../assets/my-photo.jpg';   // ← это импорт фото

function About() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Обо мне</h1>
      
      <div style={{
        display: 'flex',
        gap: '30px',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {/* Фотография - здесь используется импортированная переменная myPhoto */}
        <div style={{
          flex: '0 0 200px',
          textAlign: 'center'
        }}>
          <img 
            src={myPhoto}   // ← вот здесь! вместо обычного URL используем {myPhoto}
            alt="Фото Максима"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
          />
        </div>
        
        {/* Информация */}
        <div style={{
          flex: '1',
          minWidth: '200px'
        }}>
          <p><strong>Имя:</strong> Едленко Максим</p>
          <p><strong>Специальность:</strong> Веб-разработчик</p>
          <p><strong>Навыки:</strong> HTML, CSS, JavaScript, React</p>
          <p><strong>Интересы:</strong> Веб-разработка, создание сайтов, изучение новых технологий</p>
        </div>
      </div>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={() => navigate('/')}>
          На главную
        </button>
        <button onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </div>
  );
}

export default About;