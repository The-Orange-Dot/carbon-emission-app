import React, { useState } from "react";
import { autocomplete } from "air-port-codes-node";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function FlightForm({ handleFormSubmit, setFlightResults, flightResults }) {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    passengers: 0,
  });

  const [airportData, setAirportData] = useState([]);

  const apca = autocomplete({
    key: "36048abe21",
    secret: "11f38cab1b305ca", // Your API Secret Key: use this if you are not connecting from a web server
    limit: 15,
  });

  function handleAirportSearch(e) {
    let term = e.target.value;
    apca.request(term);

    apca.onSuccess = (data) => {
      console.log("data", data);

      const allAirports = [];

      data.airports.map(airport => {
        if(airport.children) {
          airport.children.forEach(airport => allAirports.push(airport))
        } else {
          allAirports.push(airport)
        }
      })

      setAirportData(allAirports);
    };

    apca.onError = (data) => {
      console.log("onError", data.message);
    };
  }

  function handleAirportSelect(e) {

    const code = e.target.value.split(" ").slice(-1).join("");
    
    console.log(code)
    console.log(e.target.name)

    setFormData({
      ...formData,
      [e.target.name]: code,
    });
  }

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  console.log(formData)

  function onFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
    setFlightResults({ ...flightResults, id: "" });
  }

  return (
    <div className="emission-form-container">
      <form onSubmit={onFormSubmit}>
        {/* <div>
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
        </div> */}
        <div>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={airportData.map(airport => `${airport.city}: ${airport.name} ${airport.iata}`)}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField onChange={handleAirportSearch} name="origin" onSelect={handleAirportSelect} {...params} label="Origin Airport" />}
          />
        </div>
        <div>
          <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={airportData.map(airport => `${airport.city}: ${airport.name} ${airport.iata}`)}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField onChange={handleAirportSearch} name="destination" onSelect={handleAirportSelect} {...params} label="Destination Airport" />}
          />
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
