import "./UserInfo.css";
import FlightCard from "./FlightCard";
import ShippingCard from "./ShippingCard";
import VehicleCard from "./VehicleCard";
import ElectricityCard from "./ElectricityCard";

function UserInfo({
  user,
  onFlightDelete,
  onVehicleDelete,
  onElectricityDelete,
}) {
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

  const totalElectricCarbon = user.electricityHistory.reduce(
    (count, electricity) => (count += electricity.carbon_lb),
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
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <br />
          <button>Edit Info</button>
        </div>
        <div className="carbon-emission-container">
          <div className="carbon-total">
            <h1>Total carbon emission</h1>
            <h1 className="total-user-emission">
              {(
                Math.round(
                  (totalFlightCarbon +
                    totalShippingCarbon +
                    totalVehicleCarbon +
                    totalElectricCarbon) *
                    100
                ) / 100
              )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              lbs
            </h1>
          </div>

          <div className="carbon-breakdown-container">
            <div className="carbon-breakdown-title">
              <h2>Breakdown of carbon emission</h2>
            </div>
            <div className="carbon-breakdown-list">
              <div className="flight-carbon-result">
                <h2>Flight travel: </h2>
                <h1>
                  {emissionHandler(user.flightHistory, totalFlightCarbon)}
                </h1>
              </div>
              <div className="vehicle-carbon-result">
                <h2>Automobile: </h2>
                <h1>
                  {emissionHandler(user.vehicleHistory, totalVehicleCarbon)}
                </h1>
              </div>
              <div className="shipping-carbon-result">
                <h2>Shipping: </h2>
                <h1>
                  {emissionHandler(user.shippingHistory, totalShippingCarbon)}
                </h1>
              </div>
              <div className="shipping-carbon-result">
                <h2>Electricity: </h2>
                <h1>
                  {emissionHandler(
                    user.electricityHistory,
                    totalElectricCarbon
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ marginBottom: "10px" }}>Carbon Estimate History</h1>
      <div className="results-container">
        <div className="results-cloumn">
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
        </div>

        <div className="results-cloumn">
          <h3>
            {user.vehicleHistory.length !== 0
              ? "Automobile History"
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
        </div>
        
        <div className="results-column">
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
        
        <div className="results-column">
          <h3>
            {user.electricityHistory.length !== 0
              ? "Electricity Usage History"
              : null}
          </h3>
          <div className="card-container">
            {user.electricityHistory.map((electricity) => (
              <ElectricityCard
                key={electricity.id}
                electricity={electricity}
                onElectricityDelete={onElectricityDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
