import React, { useState } from "react";
import { autocomplete } from 'air-port-codes-node';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function FlightForm({ handleFormSubmit, setFlightResults, flightResults }) {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    passengers: 0,
  });

  const [airportData, setAirportData] = useState([]);

  const apca = autocomplete({
    key : '36048abe21', 
    secret : '11f38cab1b305ca', // Your API Secret Key: use this if you are not connecting from a web server
    limit : 15
});

  function handleFormChange(e) {
    let term = e.target.value;
    apca.request(term);

    apca.onSuccess = (data) => {
      console.log('data', data);
      setAirportData(data.airports);
  };

  apca.onError = (data) => {
    console.log('onError', data.message);
};
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
    setFlightResults({ ...flightResults, id: "" });
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
          
            {/* <Autocomplete
              disablePortal
              filterOptions={(x) => x}
              id="combo-box-demo"
              options={airportData}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Airport City" />}
          />
   */}
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
