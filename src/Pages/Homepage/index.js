import "./styles.css";

import Hero from "../../Components/Hero";
import Carousel from "../../Components/Carousel";
import Section from "../../Components/Section";
import Joinus from "../../Components/Joinus";
import Pricing from "../../Components/Pricing";
import Review from "../../Components/Review";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div className="program-container">
        <Carousel />
      </div>
      <Section />
      <Joinus />
      <hr />
      <Pricing />
      <Review />
    </div>
  );
}

export default Homepage;
