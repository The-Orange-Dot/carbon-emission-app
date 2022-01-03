import React, { useState } from "react";

function VehicleForm({ handleVehicleFormSubmit }) {

    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);

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
        });
    }

    function handleMakes (e) {
        
            console.log(e.target.options.id)
            fetch(`https://www.carboninterface.com/api/v1/vehicle_make/${e.target.id}/vehicle_models`, {
            method: "GET",
            headers: {
                Authorization: "Bearer 5VRMUOEjTcf6Yl04DbDVg",
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let vehicleModels = [];
            for(let i = 0; i < data.length; i++) {
                vehicleModels.push({
                    name: data[i].data.attributes.name,
                    id: data[i].data.id
                });
            }
            console.log(vehicleModels);
            
            setModels(vehicleModels);
           
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
            let vehicleMakes = [];
            for(let i = 0; i < data.length; i++) {
                vehicleMakes.push({
                    name: data[i].data.attributes.name,
                    id: data[i].data.id
                });
            }
            
            setMakes(vehicleMakes);
           
            }
           
    )
    }
    getMakes();
    

    return (
        <div>
            <form onSubmit={onVehicleFormSubmit}> 
                <label>Distance (mi):</label>
                <input type="text" placeholder="ex. 75.0" name="distance_value" onChange={handleVehicleFormChange}></input>
                <br/>
                <label>Vehicle Make:</label>
                    <select name="vehicle_make" onChange={handleMakes}>
                        {
                        
                            makes.map(make => {
                                return (
                                    <option key={make.name} id={make.id} value={make.name}>{make.name}</option>
                                )
                            })
                        
                        }
                    </select>
                <br/>
                <label>Vehicle Model:</label>
                    <select name="vehicle_model_id" id="models" onChange={handleVehicleFormChange}>
                        {
                        
                            models.map(model => {
                                return (
                                    <option key={model} value={model}>{model}</option>
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
