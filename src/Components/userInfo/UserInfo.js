import "./UserInfo.css";
import FlightCard from "./FlightCard";
import ShippingCard from "./ShippingCard";
import VehicleCard from "./VehicleCard";

function UserInfo({ user, onFlightDelete, onVehicleDelete }) {
  const totalFlightCarbon = user.flightHistory.reduce(
    (count, flight) => (count += flight.carbon_lb / flight.passengers),
    0
  );

  const totalShippingCarbon = user.shippingHistory.reduce(
    (count, shipping) => (count += shipping.carbon_lb),
    0
  );

  const totalVehicleCarbon = user.vehicleHistory.reduce(
    (count, vehicle) => (count += vehicle.carbon_lb),
    0
  );

  const emissionHandler = (userInfo, total) => {
    return userInfo.length !== 0
      ? `${(Math.round(total * 100) / 100)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} lbs`
      : 0;
  };

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
        <div>
          <div className="flight-carbon-result">
            <h2>Total carbon from flight travel: </h2>
            <h1>{emissionHandler(user.flightHistory, totalFlightCarbon)}</h1>
          </div>
          <div className="vehicle-carbon-result">
            <h2>Total carbon from vehicles: </h2>
            <h1>
              {emissionHandler(user.vehicleHistory, totalVehicleCarbon)}
            </h1>
          </div>
          <div className="shipping-carbon-result">
            <h2>Total carbon from shipping: </h2>
            <h1>
              {emissionHandler(user.shippingHistory, totalShippingCarbon)}
            </h1>
          </div>
        </div>
      </div>
      <h1 style={{ marginBottom: "10px" }}>Carbon Estimate History</h1>
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
        {user.vehicleHistory.length !== 0
          ? "Vehicle History"
          : "No saved vehicles yet"}
      </h3>
      <div className="card-container">
        {user.vehicleHistory.map((vehicle) => (
          <VehicleCard
            key={vehicle.id}
            vehicle={vehicle}
            onVehicleDelete={onVehicleDelete}
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
