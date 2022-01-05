import React, { useState, useEffect } from "react";

function VehicleForm({ handleVehicleFormSubmit, setVehicleResults, vehicleResults }) {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const [vehicleFormData, setVehicleFormData] = useState({
    distance_value: 0,
    vehicle_model_id: "",
  });

  function handleVehicleFormChange(e) {
    if (e.target.name === "vehicle_model_id") {
      const selectedIndex = e.target.selectedIndex;
      const modelId = e.target.childNodes[selectedIndex].getAttribute("id");

      setVehicleFormData({
        ...vehicleFormData,
        vehicle_model_id: modelId,
      });
    } else {
      setVehicleFormData({
        ...vehicleFormData,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleMakes(e) {
    const selectedIndex = e.target.selectedIndex;
    const make_id = e.target.childNodes[selectedIndex].getAttribute("id");
    fetch(
      `https://www.carboninterface.com/api/v1/vehicle_makes/${make_id}/vehicle_models`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer 5VRMUOEjTcf6Yl04DbDVg`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let vehicleModels = [];
        for (let i = 0; i < data.length; i++) {
          vehicleModels.push({
            name: data[i].data.attributes.name,
            id: data[i].data.id,
            year: data[i].data.attributes.year,
          });
        }

        let sorted = vehicleModels.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        setModels(sorted);
      });
  }

  function onVehicleFormSubmit(e) {
    e.preventDefault();
    handleVehicleFormSubmit(vehicleFormData);
    setVehicleResults({ ...vehicleResults, id: ""});
  }

  useEffect(() => {
    let isAPISubscribed = true;
    fetch(`https://www.carboninterface.com/api/v1/vehicle_makes`, {
      method: "GET",
      headers: {
        Authorization: "Bearer 5VRMUOEjTcf6Yl04DbDVg",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (isAPISubscribed) {
          let vehicleMakes = [];
          for (let i = 0; i < data.length; i++) {
            vehicleMakes.push({
              name: data[i].data.attributes.name,
              id: data[i].data.id,
            });
          }

          let sorted = vehicleMakes.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });

          setMakes(sorted);
        }
      });
    return () => {
      isAPISubscribed = false;
    };
  }, []);

  return (
    <div className="emission-form-container">
      <form onSubmit={onVehicleFormSubmit}>
        <div>
          <label>Distance (mi):</label>
          <input
            type="text"
            placeholder="Ex: 123"
            name="distance_value"
            onChange={handleVehicleFormChange}
          ></input>
        </div>
        <div>
          <label>Vehicle Make:</label>
          <select name="vehicle_make" onChange={handleMakes}>
            <option value="Select a Make">Select a Make</option>
            {makes.map((make) => {
              return (
                <option key={make.id} id={make.id} value={make.name}>
                  {make.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Vehicle Model:</label>
          <select name="vehicle_model_id" onChange={handleVehicleFormChange}>
            <option value="Select a Model">Select a Model</option>
            {models.map((model) => {
              return (
                <option key={model.id} id={model.id} value={model.name}>
                  {model.name} {model.year}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit">Get Carbon Estimate</button>
      </form>
    </div>
  );
}

export default VehicleForm;
