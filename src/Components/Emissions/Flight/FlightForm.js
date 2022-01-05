import React, { useState } from "react";

function FlightForm({ handleFormSubmit }) {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    passengers: 0,
  });

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <div className="emission-form-container">
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Departure airport:</label>
          <input
            type="text"
            placeholder="Ex: DIA (Denver)"
            name="origin"
            onChange={handleFormChange}
          ></input>
        </div>
        <div>
          <label>Destination airport:</label>
          <input
            type="text"
            placeholder="Ex: BOS (Boston)"
            name="destination"
            onChange={handleFormChange}
          ></input>
        </div>
        <div>
          <label>Number of Passengers:</label>
          <input
            type="text"
            placeholder="Ex: 3"
            name="passengers"
            onChange={handleFormChange}
          ></input>
        </div>
        <button type="submit">Get Carbon Estimate</button>
      </form>
    </div>
  );
}

export default FlightForm;
