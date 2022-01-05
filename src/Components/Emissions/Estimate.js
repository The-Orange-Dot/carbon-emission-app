import React, { useState } from "react";
import FlightForm from "./Flight/FlightForm";
import FlightResults from "./Flight/FlightResults";
import VehicleForm from "./Vehicle/VehicleForm";
import VehicleResults from "./Vehicle/VehicleResults";
import ShippingForm from "./Shipping/ShippingForm";
import ShippingResults from "./Shipping/ShippingResults";
import ElectricityForm from "./Electricity/ElectricityForm";
import ElectricityResults from "./Electricity/Electricity.Results";
import "./EmissionPage.css";

const API = process.env.REACT_APP_CARBONINTERFACE_API;
const API_KEY = process.env.REACT_APP_CARBONINTERFACE_KEY;

function Estimate({
  onSaveData,
  //onSaveVehicleClick,
  //onSaveShippingClick,
  //onSaveElectricityClick
}) {
  const [flightResults, setFlightResults] = useState({
    date: "",
    passengers: "",
    departure: "",
    destination: "",
    carbon_lb: 0,
    id: "",
  });

  const [vehicleResults, setVehicleResults] = useState({
    date: "",
    distance_value: 0,
    distance_unit: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    carbon_lb: 0,
    id: "",
  });

  const [shippingResults, setShippingResults] = useState({
    date: "",
    weight: 0,
    distance: 0,
    method: "",
    carbon_lb: 0,
    id: "",
  });

  const [electricityResults, setElectricityResults] = useState({
    date: "",
    country: "",
    state: "",
    electricity_value: "",
    carbon_lb: 0,
    id: "",
  });

  const [onFForm, setOnFForm] = useState(false);
  const [onVForm, setOnVForm] = useState(false);
  const [onSForm, setOnSForm] = useState(false);
  const [onEForm, setOnEForm] = useState(false);

  function handleFlightFormSubmit(formData) {
    fetch(API, {
      method: "POST",

      headers: {
        Authorization: API_KEY,
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
    fetch(API, {
      method: "POST",

      headers: {
        Authorization: API_KEY,
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
    fetch(API, {
      method: "POST",

      headers: {
        Authorization: API_KEY,
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

  function handleElectricityFormSubmit(elecrticityData) {
    fetch(API, {
      method: "POST",

      headers: {
        Authorization: API_KEY,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "electricity",
        electricity_unit: "kwh",
        electricity_value: elecrticityData.electricity_value,
        country: "us",
        state: elecrticityData.state,
      }),
    })
      .then((resp) => resp.json())
      .then((results) => {
        console.log(results);
        setElectricityResults({
          date: results.data.attributes.estimated_at,
          country: "US",
          state: results.data.attributes.state.toUpperCase(),
          electricity_value: results.data.attributes.electricity_value,
          carbon_lb: results.data.attributes.carbon_lb,
          id: results.data.id,
        });
      });
  }

  function handleFFormClick() {
    setOnFForm(!onFForm);
  }

  function handleVFormClick() {
    setOnVForm(!onVForm);
  }

  function handleSFormClick() {
    setOnSForm(!onSForm);
  }

  function handleEFormClick() {
    setOnEForm(!onEForm);
  }

  return (
    <div className="emission-container">
      <div>
        <h1 className="emission-welcome-text">Calculate carbon emissions</h1>
      </div>
      <div className="all-the-forms">
        <div className="form-container">
          <div>
            {/* Testing image for cards */}
            <div className="airplane"></div>
            {onFForm ? (
              <h2>Flights</h2>
            ) : (
              <>
                <FlightForm handleFormSubmit={handleFlightFormSubmit} />
                {flightResults.id.length !== 0 ? (
                  <FlightResults
                    flightData={flightResults}
                    onSaveData={onSaveData}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className="form-container">
          <div>
            {/* Testing image for cards */}
            <div className="road"></div>
            {onVForm ? (
              <h2>Automobiles</h2>
            ) : (
              <>
                <VehicleForm
                  handleVehicleFormSubmit={handleVehicleFormSubmit}
                />
                {vehicleResults.id.length !== 0 ? (
                  <VehicleResults
                    vehicleData={vehicleResults}
                    onSaveData={onSaveData}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className="form-container">
          <div>
            {/* Testing image for cards */}
            <div className="shipping"></div>
            {onSForm ? (
              <h2>Shipping</h2>
            ) : (
              <>
                <ShippingForm handleFormSubmit={handleShippingFormSubmit} />
                {shippingResults.id.length !== 0 ? (
                  <ShippingResults
                    shippingData={shippingResults}
                    onSaveData={onSaveData}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
        <div className="form-container">
          <div>
            {/* Testing image for cards */}
            <div className="electricity"></div>
            {onEForm ? (
              <h2>Electricity</h2>
            ) : (
              <>
                <ElectricityForm
                  handleFormSubmit={handleElectricityFormSubmit}
                />
                {electricityResults.id.length !== 0 ? (
                  <ElectricityResults
                    electricityData={electricityResults}
                    onSaveData={onSaveData}
                  />
                ) : null}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estimate;
