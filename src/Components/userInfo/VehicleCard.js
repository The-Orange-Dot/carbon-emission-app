import "./UserInfo.css";

function VehicleCard({ vehicle, onVehicleDelete }) {
  return (
    <div className="vehicle-card">
      <h4 className="card-header">{vehicle.vehicle_year} {vehicle.vehicle_make} {vehicle.vehicle_model}</h4>
      <ul>
        <p>Date estimated: {vehicle.date.slice(0, 10)}</p>
        <p>{vehicle.distance_value} {vehicle.distance_unit}</p>
        <div>
          <p>Estimated carbon:</p>
          <p>
            <strong>{vehicle.carbon_lb} lbs</strong>
          </p>
        </div>
      </ul>
      <button
        onClick={() => onVehicleDelete(vehicle)}
        className="carbon-estimate-btn"
      >
        Delete Flight
      </button>
    </div>
  );
}

export default VehicleCard;
