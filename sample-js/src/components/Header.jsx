import { Link, useLocation } from "react-router-dom";

export default function Header({ onLoginClick }) {
  const location = useLocation();
  
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/src/assets/logo-removebg-preview.png" alt="CULAGBANG Logo" className="logo-img" />
        </Link>
        
        <nav className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}
          >
            Products
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact
          </Link>
        </nav>
        
        <button onClick={onLoginClick} className="login-btn-header">
          Login
        </button>
      </div>
    </header>
  );
}
