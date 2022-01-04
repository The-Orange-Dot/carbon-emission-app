function VehicleResults({ vehicleData, onSaveVehicleClick }) {
  return (
    <div>
      <h2>Carbon Estimate:</h2>

      <h4>Type:</h4>
      <p>vehicle estimate</p>

      <h4>Date:</h4>
      <p>{vehicleData.estimated_at}</p>

      <h4>Distance:</h4>
      <p>{vehicleData.distance_value} {vehicleData.distance_unit}</p>

      <h4>Vehicle:</h4>
      <p>{vehicleData.vehicle_year} {vehicleData.vehicle_make} {vehicleData.vehicle_model}</p>

      <h4>Carbon Estimate (lbs): </h4>
      <p>{vehicleData.carbon_lb}</p>

      <button onClick={() => onSaveVehicleClick(vehicleData)}>
        Save to History
      </button>
    </div>
  );
}

export default VehicleResults;