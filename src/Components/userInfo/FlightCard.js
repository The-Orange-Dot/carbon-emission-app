import "./UserInfo.css";

function FlightCard({ flight, onFlightDelete }) {
  return (
    <div className="flight-card">
      <h4 className="card-header">{`${flight.departure} → ${flight.destination}`}</h4>
      <ul>
        <p>Date estimated: {flight.date.slice(0, 10)}</p>
        <p>Number of passengers: {flight.passengers}</p>
        <p>Estimated carbon: {flight.carbon_lb} lbs</p>
      </ul>
      <button
        onClick={() => onFlightDelete(flight)}
        className="carbon-estimate-btn"
      >
        Delete Flight
      </button>
    </div>
  );
}

export default FlightCard;
