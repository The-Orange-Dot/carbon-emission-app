import React, { useState } from "react";
import FlightForm from "./FlightForm";
import FlightResults from "./FlightResults";
import VehicleForm from "./VehicleForm";
import VehicleResults from "./VehicleResults";
import ShippingForm from "./ShippingForm";
import ShippingResults from "./ShippingResults"
import "./EmissionPage.css";

function Estimate({ onSaveFlightClick, onSaveVehicleClick, onSaveShippingClick}) {
  const [flightResults, setFlightResults] = useState({
    date: "",
    passengers: "",
    departure: "",
    destination: "",
    carbon_lb: "",
    id: "",
  });

  const [shippingResults, setShippingResults] = useState({
    date: "",
    weight: 0,
    distance: 0,
    method: "",
    carbon_lb: "",
    id: ""
  })

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

  function handleVehicleFormSubmit() {

  }

  function handleShippingFormSubmit(shippingData) {
    console.log("beforefetch")
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
        transport_method: shippingData.method
      })
    })
    .then(resp => resp.json())
    .then(shippingData => {
      console.log(shippingData)
      setShippingResults({
        date: shippingData.data.attributes.estimated_at,
        weight: shippingData.data.attributes.weight_value,
        distance: shippingData.data.attributes.distance_value,
        method: shippingData.data.attributes.transport_method,
        carbon_lb: shippingData.data.attributes.carbon_lb,
        id: shippingData.data.id
      })
    })
  }

  console.log(shippingResults)


  return (
    <div className="emission-container">
      <div>
        <h1 className="welcome-text">Calculate carbon emissions</h1>
      </div>
      <div className="all-the-forms">
      <div className="form-container">
        <h3>Calculate emissions for flight</h3>
        <FlightForm handleFormSubmit={handleFlightFormSubmit} />
        {flightResults.id.length !== 0 ? (
          <FlightResults flightData={flightResults} onSaveDataClick={onSaveFlightClick} />
        ) : null}
      </div>
        <div className="form-container">
            <h3>Calculate emissions for Vehicles</h3>
            <VehicleForm handleVehicleFormSubmit={handleVehicleFormSubmit} />
              {flightResults.id.length !== 0 ? (
              <VehicleResults vehicleData={flightResults} onSaveDataClick={onSaveVehicleClick} />
      ) : null}
        </div>
        <div className="form-container">
            <h3>Calculate emissions for shipping</h3>
            <ShippingForm handleFormSubmit={handleShippingFormSubmit}/>
            {shippingResults.id.length !== 0 ? (
              <ShippingResults shippingData={shippingResults} onSaveShippingClick={onSaveShippingClick} />
              ) : null}
        </div>
    </div>
    </div>
  );
}

export default Estimate;
