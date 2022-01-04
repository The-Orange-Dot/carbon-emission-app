import logo from "../../images/treeLogo.png";
import "./About.css";

function AboutCard({ name, info, image }) {
    return (
          <div className="developer-card">
            <img src={image}
                 alt={name} 
                 className="dev-img" />
            <div className="info-card">
                <h3>{name}</h3>
                <br />
                <p>{info}</p>
            </div>
          </div>
    )
}

export default AboutCard;