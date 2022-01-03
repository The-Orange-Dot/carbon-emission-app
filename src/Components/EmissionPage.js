import FlightEstimate from "./FlightEstimate";
import "./EmissionPage.css";

const EmissionPage = ({ hideNewForm }) => {
  return (
    <div className={hideNewForm ? "hidden" : "add-new-emission"}>
      <FlightEstimate />
    </div>
  );
};

export default EmissionPage;
