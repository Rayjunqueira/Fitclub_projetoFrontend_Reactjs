import "./styles.css";

import class1 from '../../Assets/class-1.jpg';
import class2 from '../../Assets/class-2.jpg';

const Hero = () => {
  return (
    <div>
      <div className="section-container">
        <div className="img-section">
          <img src={class1} /> 
        </div>
        <div className="section-info">
          <h2>
            THE CLASS YOU WILL GET HERE
          </h2>
          <p>Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness endeavors.</p>
          <button>Book A Class</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
