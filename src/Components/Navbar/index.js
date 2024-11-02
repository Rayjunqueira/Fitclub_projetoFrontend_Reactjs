import './styles.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../Assets/logo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const route = useNavigate();

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const handleHome = () => {
      route('/');
    }

    return (
      <div className='container'>
        <div className='navbar-mobile-container'>
          <i onClick={toggleMobileMenu}>
            <MenuIcon id='burger-icon'/>
          </i>
          <img src={logo} alt="Logo" onClick={handleHome} />
        </div>
        <div className={`navbar-mobile-list ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>Home</li>
            <li>Program</li>
            <li>Service</li>
            <li>About</li>
            <li>Community</li>
          </ul>
          <div className='mobile-button-join'>
            <button>Join Now</button>
          </div>
        </div>
        <div className='navbar-container'>
          <div className='logo'>
            <img src={logo} alt="Logo" /> 
          </div>
          <div className='navbar-list'>
            <ul>
              <li>Home</li>
              <li>Program</li>
              <li>Service</li>
              <li>About</li>
              <li>Community</li>
            </ul>
          </div>
          <div className='join-button'>
            <button>Join Now</button>
          </div>
        </div>
      </div>
    );
}

export default Navbar;
