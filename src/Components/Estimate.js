import React, { useState } from "react";
import FlightForm from "./FlightForm";
import FlightResults from "./FlightResults";
import "./EmissionPage.css";

function Estimate({ onSaveDataClick }) {
  const [results, setResults] = useState({
    date: "",
    passengers: "",
    departure: "",
    destination: "",
    carbon_lb: "",
    id: "",
  });

  function handleFormSubmit(formData) {
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
        setResults({
          date: flightData.data.attributes.estimated_at,
          passengers: flightData.data.attributes.passengers,
          departure: flightData.data.attributes.legs[0].departure_airport,
          destination: flightData.data.attributes.legs[0].destination_airport,
          carbon_lb: flightData.data.attributes.carbon_lb,
          id: flightData.data.id,
        })
      );
  }
  return (
    <div>
      <div className="emission-container">
        <h1 className="welcome-text">Calculate carbon emissions</h1>
      </div>
      <div className="form-container">
      <h3>Calculate emission for flight</h3>
      <FlightForm handleFormSubmit={handleFormSubmit} />
      {results.id.length !== 0 ? (
        <FlightResults flightData={results} onSaveDataClick={onSaveDataClick} />
      ) : null}
      </div>
    </div>
  );
}

export default Estimate;
