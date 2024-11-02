import "./styles.css";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import member from '../../Assets/member.jpg';

const Review = () => {
  return (
    <div className="review-container">
      <h3>MEMBER REVIEW</h3>
      <p>
        What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.
      </p>
      <div className="stars-review">
        <i><StarIcon id='star-icon'/></i>
        <i><StarIcon id='star-icon'/></i>
        <i><StarIcon id='star-icon'/></i>
        <i><StarIcon id='star-icon'/></i>
        <i><StarHalfIcon id='star-icon' /></i>
      </div>
      <div className="member-review">
        <div className="member-img">
          <img src={member} alt="Member" />
        </div>
        <div className="member-info">
          <h4>Jane Cooper</h4>
          <p>Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
