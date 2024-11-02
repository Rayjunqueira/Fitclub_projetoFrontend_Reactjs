import "./styles.css";

import hero from '../../Assets/hero.png';

const Hero = () => {
  return (
    <div>
      <div className='mobile-hero-section'>
        <h4 className="hero-title">BEST FITNESS IN THE TOWN</h4>
        <img src={hero} alt="Hero Background" /> 
        <div className="overlay"></div>
        <div className="text-overlay">
          <h2>MAKE YOUR BODY SHAPE</h2>
          <p>Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
          <button>Get Started</button>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-info">
          <h4>BEST FITNESS IN THE TOWN</h4>
          <h2>
            MAKE YOUR<br />
            <span>BODY SHAPE</span>
          </h2>
          <p>Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
          <button>Get Started</button>
        </div>
        <div className="img-mobile">
          <img src={hero} /> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
