import "./styles.css";
import join from '../../Assets/join.jpg';

import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import VideocamIcon from '@mui/icons-material/Videocam';
import ApartmentIcon from '@mui/icons-material/Apartment';

const Joinus = () => {
  return (
    <div>
      <div className="joinus-container">
        <div className="join-title">
            <h3>WHY JOIN US?</h3>
            <p>Our diverse membership base creates a friendly and supportive atmosphere,</p>
            <p>where you can make friends and stay motivated.</p>
        </div>
        <div className="join-img">
            <img src={join} alt="Join Us" />
            <div className="join-board">
                <div className="board">
                  <div className="board-icon-container">
                      <SettingsAccessibilityIcon id='board-icon' />
                    </div>
                    <div className="board-desc-container">
                      <h4>Good Management</h4>
                      <p>Supportive management, for your fitness success.</p>
                    </div>
                </div>
                <div className="board">
                  <div className="board-icon-container">
                      <VideocamIcon id='board-icon' />
                    </div>
                    <div className="board-desc-container">
                      <h4>Quality Classes</h4>
                      <p>Access to a variety of classes tailored for all levels.</p>
                    </div>
                </div>
                <div className="board">
                  <div className="board-icon-container">
                    <ApartmentIcon id='board-icon' />
                  </div>
                  <div className="board-desc-container">
                    <h4>Great Facilities</h4>
                    <p>State-of-the-art equipment and clean environment.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Joinus;
