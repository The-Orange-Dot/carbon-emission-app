import logo from "../../images/treeLogo.png";
import "./About.css";

function AboutCard({ name }) {
    return (
          <div className="developer-card">
            <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg" alt="temp img" className="dev-img"></img>
            <div className="info-card">
                <h3>{name}</h3>
            </div>
          </div>
    )
}

export default AboutCard;