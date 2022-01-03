import React, { useState } from "react";
import VehicleForm from "./VehicleForm";
import VehicleResults from "./VehicleResults";
import "./EmissionPage.css";

function VehicleEstimate({ onSaveVehicleDataClick }) {
  const [results, setResults] = useState({
    date: "",
    distance_value: 0,
    distance_unit: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    carbon_lb: "",
    id: "",
  });

  function handleVehicleFormSubmit(vehicleFormData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: "Bearer 5VRMUOEjTcf6Yl04DbDVg",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "vehicle",
        distance_unit: "mi",
        distance_value: vehicleFormData.distance_value,
        vehicle_model_id: vehicleFormData.vehicle_model_id
      }),
    })
      .then((resp) => resp.json())
      .then((vehicleData) =>
        setResults({
          date: vehicleData.data.attributes.estimated_at,
          distance_value: vehicleData.data.attributes.distance_value,
          distance_unit: vehicleData.data.attributes.distance_unit,
          vehicle_make: vehicleData.data.attributes.vehicle_make,
          vehicle_model: vehicleData.data.attributes.vehicle_model,
          vehicle_year: vehicleData.data.attributes.vehicle_year,
          carbon_lb: vehicleData.data.attributes.carbon_lb,
          id: vehicleData.data.id
        })
      );
  }
  return (
    <div>
      <div className="emission-container">
        <h1 className="welcome-text">Calculate carbon emissions</h1>
      </div>
      <h3>Calculate emission for vehicle</h3>
      <VehicleForm handleVehicleFormSubmit={handleVehicleFormSubmit} />
      {results.id.length !== 0 ? (
        <VehicleResults vehicleData={results} onSaveVehicleDataClick={onSaveVehicleDataClick} />
      ) : null}
    </div>
  );
}

export default VehicleEstimate;