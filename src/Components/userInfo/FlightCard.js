import "./UserInfo.css";

function FlightCard({ flight, onFlightDelete }) {
    return (
            <div className="flight-card">
                <h4 className="card-header">{`${flight.departure} → ${flight.destination}`}</h4>
                <ul>
                    <p>date: {flight.date.slice(0,10)}</p>
                    <p>passengers: {flight.passengers}</p>
                    <p>carbon (lbs): {flight.carbon_lb}</p>
                </ul>
                <button onClick={() => onFlightDelete(flight)}>Delete FLight</button>
            </div>
    )
}

export default FlightCard;