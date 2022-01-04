import "./UserInfo.css";

function FlightCard({ flight, onFlightDelete }) {
  return (
    <div className="flight-card">
      <h4 className="card-header">{`${flight.departure} → ${flight.destination}`}</h4>
      <ul>
        <p>Date estimated: {flight.date.slice(0, 10)}</p>
        <p>Number of passengers: {flight.passengers}</p>
        <div>
          <p>Estimated carbon per person:</p>
          <p>
            <strong>
              {" "}
              {(Math.round((flight.carbon_lb / flight.passengers) * 100) / 100)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              lbs
            </strong>
          </p>
        </div>
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
