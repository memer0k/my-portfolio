import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{
      background: '#333',
      padding: '15px',
      textAlign: 'center'
    }}>
      <Link to="/" style={{
        color: 'white',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '18px'
      }}>Главная</Link>
      
      <Link to="/about" style={{
        color: 'white',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '18px'
      }}>Обо мне</Link>
      
      <Link to="/contact" style={{
        color: 'white',
        margin: '0 15px',
        textDecoration: 'none',
        fontSize: '18px'
      }}>Контакты</Link>
    </nav>
  );
}

export default Header;