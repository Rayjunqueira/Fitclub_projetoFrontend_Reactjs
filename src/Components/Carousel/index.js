import "./styles.css";
import { useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';

const Carousel = () => { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const cards = [
    { title: "Strength", description: "Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.", icon: <FitnessCenterIcon /> },
    { title: "Physical Fitness", description: "It encompasses a range of activies that improve health, strength, flexibility, and overall well-being.", icon: <FavoriteIcon /> },
    { title: "Fat Loss", description: "Through a combination of workout routines and expert guidance, we'll empower you to each your goals.", icon: <DirectionsRunIcon /> },
    { title: "Weight Gain", description: "Designed for individuals, our program offers and effective approach to gaining weight In a sustainable manner.", icon: <MonitorWeightIcon /> },
    { title: "Sports Reason", description: "We offer an effective approach for athletes who need endurance and high performance for sports activities.", icon: <SportsFootballIcon /> },
  ];

  const maxIndex = Math.ceil(cards.length / cardsToShow) - 1;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1 > maxIndex ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? maxIndex : prevIndex - 1));
  };

  const updateCardsToShow = () => {
    const width = window.innerWidth;
    setCardsToShow(width < 768 ? 1 : 2); 
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  return (
    <div className="carousel-container">
      <div className="explore-container">
        <h3>EXPLORE OUR PROGRAM</h3>
        <div className="explore-arrows">
          <i onClick={prevCard}><KeyboardBackspaceIcon id='arrow' /></i>
          <i onClick={nextCard}><EastIcon id='arrow' /></i>
        </div>
      </div>
      <div className="cards-container">
        <div className="card" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`, display: 'flex', transition: 'transform 0.5s ease' }}>
          {cards.map((card, index) => (
            <div className="card-item" key={index}>
              <div className="card-icon">{card.icon}</div>
              <h4>{card.title}</h4>
              <div className="card-description">
                <p>{card.description}</p>              
              </div>
              <li>Join Now</li> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
