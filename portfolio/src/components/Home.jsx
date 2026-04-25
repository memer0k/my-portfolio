import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Добро пожаловать!</h1>
      <p>Привет! Меня зовут Максим, и это моё портфолио.</p>
      <p>Здесь вы можете узнать обо мне и связаться со мной.</p>
      <button onClick={() => navigate('/about')}>
        Узнать обо мне
      </button>
      <button onClick={() => navigate('/contact')}>
        Связаться со мной
      </button>
    </div>
  );
}

export default Home;