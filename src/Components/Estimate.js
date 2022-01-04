import React, { useState } from "react";
import FlightForm from "./FlightForm";
import FlightResults from "./FlightResults";
import VehicleForm from "./VehicleForm";
import VehicleResults from "./VehicleResults";
import ShippingForm from "./ShippingForm";
import ShippingResults from "./ShippingResults";
import "./EmissionPage.css";

function Estimate({
  onSaveFlightClick,
  onSaveVehicleClick,
  onSaveShippingClick,
}) {
  const [flightResults, setFlightResults] = useState({
    date: "",
    passengers: "",
    departure: "",
    destination: "",
    carbon_lb: "",
    id: "",
  });

  const [vehicleResults, setVehicleResults] = useState({
    date: "",
    distance_value: 0,
    distance_unit: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    carbon_lb: "",
    id: "",
  });

  const [shippingResults, setShippingResults] = useState({
    date: "",
    weight: 0,
    distance: 0,
    method: "",
    carbon_lb: "",
    id: "",
  });

  function handleFlightFormSubmit(formData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: "Bearer 55NshTJnqIgD0wWtt246eg",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "flight",
        passengers: formData.passengers,
        legs: [
          {
            departure_airport: formData.origin,
            destination_airport: formData.destination,
          },
        ],
        distance_unit: "mi",
      }),
    })
      .then((resp) => resp.json())
      .then((flightData) =>
        setFlightResults({
          date: flightData.data.attributes.estimated_at,
          passengers: flightData.data.attributes.passengers,
          departure: flightData.data.attributes.legs[0].departure_airport,
          destination: flightData.data.attributes.legs[0].destination_airport,
          carbon_lb: flightData.data.attributes.carbon_lb,
          id: flightData.data.id,
        })
      );
  }

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
        vehicle_model_id: vehicleFormData.vehicle_model_id,
      }),
    })
      .then((resp) => resp.json())
      .then((vehicleData) =>
        setVehicleResults({
          date: vehicleData.data.attributes.estimated_at,
          distance_value: vehicleData.data.attributes.distance_value,
          distance_unit: vehicleData.data.attributes.distance_unit,
          vehicle_make: vehicleData.data.attributes.vehicle_make,
          vehicle_model: vehicleData.data.attributes.vehicle_model,
          vehicle_year: vehicleData.data.attributes.vehicle_year,
          carbon_lb: vehicleData.data.attributes.carbon_lb,
          id: vehicleData.data.id,
        })
      );
  }

  function handleShippingFormSubmit(shippingData) {
    console.log("beforefetch");
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: "Bearer 55NshTJnqIgD0wWtt246eg",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "shipping",
        weight_value: shippingData.weight,
        weight_unit: "lb",
        distance_value: shippingData.distance,
        distance_unit: "mi",
        transport_method: shippingData.method,
      }),
    })
      .then((resp) => resp.json())
      .then((shippingData) => {
        console.log(shippingData);
        setShippingResults({
          date: shippingData.data.attributes.estimated_at,
          weight: shippingData.data.attributes.weight_value,
          distance: shippingData.data.attributes.distance_value,
          method: shippingData.data.attributes.transport_method,
          carbon_lb: shippingData.data.attributes.carbon_lb,
          id: shippingData.data.id,
        });
      });
  }

  return (
    <div className="emission-container">
      <div>
        <h1 className="emission-welcome-text">Calculate carbon emissions</h1>
      </div>
      <div className="all-the-forms">
        <div className="form-container">
          <h2>Flights</h2>
          <FlightForm handleFormSubmit={handleFlightFormSubmit} />
          {flightResults.id.length !== 0 ? (
            <FlightResults
              flightData={flightResults}
              onSaveFlightClick={onSaveFlightClick}
            />
          ) : null}
        </div>
        <div className="form-container">
          <h2>Automobiles</h2>
          <VehicleForm handleVehicleFormSubmit={handleVehicleFormSubmit} />
          {vehicleResults.id.length !== 0 ? (
            <VehicleResults
              vehicleData={vehicleResults}
              onSaveVehicleClick={onSaveVehicleClick}
            />
          ) : null}
        </div>
        <div className="form-container">
          <h2>Shipping</h2>
          <ShippingForm handleFormSubmit={handleShippingFormSubmit} />
          {shippingResults.id.length !== 0 ? (
            <ShippingResults
              shippingData={shippingResults}
              onSaveShippingClick={onSaveShippingClick}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Estimate;
