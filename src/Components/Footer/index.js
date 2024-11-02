import "./styles.css";
import logo from '../../Assets/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="logo-container">
            <div className="logo-img-footer">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-text">
                <p id='p-nohover'>Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let's sweat, achieve, and conquer together!</p>
            </div>
            <div className="network-icons">
                <i><FacebookIcon /></i>
                <i><InstagramIcon /></i>
                <i><XIcon /></i>
            </div>
        </div>
        <div className="footer-info">
            <h3>Company</h3>
            <p>Business</p>
            <p>Franchise</p>
            <p>Partnership</p>
            <p>Network</p>
        </div>
        <div className="footer-aboutus">
            <h3>About Us</h3>
            <p>Blogs</p>
            <p>Security</p>
            <p>Careers</p>
        </div>
        <div className="footer-contact">
            <h3>Contact</h3>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>BMI Calculator</p>
        </div>
    </div>
  );
}

export default Footer;
