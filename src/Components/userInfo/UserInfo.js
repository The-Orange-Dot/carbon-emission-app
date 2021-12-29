import "./UserInfo.css";
import FlightCard from "./FlightCard";


function UserInfo({ user, onFlightDelete }) {
  return (
    <div className="user-info">
      <h1>Carbon Estimate History</h1>
      <h3>{user.flightHistory.length !== 0 ? "Flight History" : "No saved flights yet"}</h3>
      <div className="card-container">
        {user.flightHistory.map(flight => <FlightCard key={flight.id} flight={flight} onFlightDelete={onFlightDelete}/>)}
      </div>
    </div>
  );
}

export default UserInfo;
