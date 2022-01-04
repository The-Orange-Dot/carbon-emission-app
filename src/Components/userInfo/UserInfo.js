import "./UserInfo.css";
import FlightCard from "./FlightCard";
import ShippingCard from "./ShippingCard";

function UserInfo({ user, onFlightDelete }) {
  const totalFlightCarbon = user.flightHistory.reduce(
    (count, flight) => (count += flight.carbon_lb / flight.passengers),
    0
  );

  return (
    <div className="user-info">
      <div className="card-container">
        <div className="user-card">
          <h1>User Info</h1>

          <img src={user.image} alt="user" className="user-image" />

          <p>
            <strong>First Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <br />
          <button>Edit Info</button>
        </div>
        <div className="total-carbon-result">
          <h2>Total carbon from flight travel: </h2>
          <h1>
            {user.flightHistory.length !== 0
              ? `${(Math.round(totalFlightCarbon * 100) / 100)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lbs`
              : 0}
          </h1>
        </div>
      </div>
      <h1>Carbon Estimate History</h1>
      <h3>
        {user.flightHistory.length !== 0
          ? "Flight History"
          : "No saved flights yet"}
      </h3>
      <div className="card-container">
        {user.flightHistory.map((flight) => (
          <FlightCard
            key={flight.id}
            flight={flight}
            onFlightDelete={onFlightDelete}
          />
        ))}
      </div>
      <h3>
        {user.shippingHistory.length !== 0
          ? "Shipping History"
          : "No saved shipments yet"}
      </h3>
      <div className="card-container">
        {user.shippingHistory.map((shipment) => (
          <ShippingCard
            key={shipment.id}
            shipment={shipment}
            onShipmentDelete={null}
          />
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
