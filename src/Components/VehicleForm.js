import React, { useState } from "react";

function VehicleForm({ handleVehicleFormSubmit }) {

    const [makes, setMakes] = useState([]);

    const [vehicleFormData, setVehicleFormData] = useState({
        type: "vehicle",
        distance_unit: "mi",
        distance_value: 0,
        vehicle_model_id: ""
    })

    function handleVehicleFormChange(e) {
        setVehicleFormData({
            ...vehicleFormData,
            [e.target.name]: e.target.value
        })
    }

    function onVehicleFormSubmit(e) {
        e.preventDefault();
        handleVehicleFormSubmit(vehicleFormData);
    }

    function getMakes() {
        fetch(`https://www.carboninterface.com/api/v1/vehicle_makes`, {
            method: "GET",
            headers: {
                Authorization: "Bearer 5VRMUOEjTcf6Yl04DbDVg",
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMakes(data.attributes.name);
        })
    }

    function getModels() {

    }

    return (
        <div>
            <form onSubmit={onVehicleFormSubmit}> 
                <label>Distance in miles:</label>
                <input type="text" placeholder="enter mileage" name="distance_value" onChange={handleVehicleFormChange}></input>
                <br/>
                <label>Vehicle Make:</label>
                    <select name="vehicle_model_id" id="makes" onChange={handleVehicleFormChange}>
                        {
                        
                            makes.map(make => {
                                return (
                                    <option key={make} value={make}>{make}</option>
                                )
                            })
                        
                        }
                    </select>
                <br/>
                
                <button type="submit">Get Carbon Estimate</button>
            </form>
        </div>
)


}

export default VehicleForm;
