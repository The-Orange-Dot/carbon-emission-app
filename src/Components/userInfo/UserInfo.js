import "./UserInfo.css";
import FlightCard from "./FlightCard";


function UserInfo({ user, onFlightDelete }) {

  const totalFlightCarbon = user.flightHistory.reduce((count, flight) => count += flight.carbon_lb, 0);


  return (
    <div className="user-info">
      <h1>User Info</h1>
      <div className="card-container">
        <div className="user-card">
          <img src={user.image} alt="user image" className="user-image"></img>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      </div>
      <h1>Carbon Estimate History</h1>
      <h3>{user.flightHistory.length !== 0 ? "Flight History" : "No saved flights yet"}</h3>
      <div className="card-container">
        {user.flightHistory.map(flight => <FlightCard key={flight.id} flight={flight} onFlightDelete={onFlightDelete}/>)}
      </div>
      <h4>{user.flightHistory.length !== 0 ? `Total carbon from flight travel: ${Math.round(totalFlightCarbon * 100) / 100}` : null}</h4>
    </div>
  );
}

export default UserInfo;
