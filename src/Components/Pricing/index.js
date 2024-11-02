import "./styles.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Pricing = () => {
  return (
    <div>
      <div className="pricing-container">
        <div className="pricing-plan-title">
          <h2>OUR PRICING PLAN</h2>
          <div className="pricing-description">
            <p>Our pricing plan comes with various membership tiers,</p>
            <p>each tailored to cater to different preferences and fitness aspirations.</p>
          </div>
        </div>
        <div className="pricing-plan-cards">
          <div className="card-pricing">
            <h3>Basic Plan</h3>
            <h4>$16</h4>
            <hr />
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Smart workout plan</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>At home workouts</p>
            </div>
            <div className="button-card-pricing">
              <button>Join Now</button>
            </div>
          </div>
          <div className="card-pricing">
            <h3>Weekly Plan</h3>
            <h4>$25</h4>
            <hr />
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Smart workout plan</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>At home workouts</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Additional workouts</p>
            </div>
            <div className="button-card-pricing">
              <button>Join Now</button>
            </div>
          </div>
          <div className="card-pricing">
            <h3>Monthly Plan</h3>
            <h4>$45</h4>
            <hr />
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Smart workout plan</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>At home workouts</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Additional workouts</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Exclusive content</p>
            </div>
            <div className="check-card-pricing">
              <i><CheckCircleOutlineIcon /></i>
              <p>Personal trainer access</p>
            </div>
            <div className="button-card-pricing">
              <button>Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
