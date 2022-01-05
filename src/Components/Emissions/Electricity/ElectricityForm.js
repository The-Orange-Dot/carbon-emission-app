import { useState } from "react";


function ElectricityForm({ handleFormSubmit }) {
    const [electricityData, setElectricityData] = useState({
        state: "",
        electricity_value: ""
    });

    function onFormSubmit(e) {
        e.preventDefault();
        handleFormSubmit(electricityData);
    }

    function handleElectricityDataChange(e) {
        setElectricityData({
            ...electricityData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="emission-form-container">
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Electricity used (kWh):</label>
                <input
                    type="text"
                    placeholder="Ex: 12.3"
                    name="electricity_value"
                    onChange={handleElectricityDataChange}
                ></input>
            </div>
           
            <div>
                <label>State:</label>
                <select
                    name="state"
                    id="state"
                    onChange={handleElectricityDataChange}
                >
                    <option value="ma">MA</option>
                    <option value="ny">NY</option>
                </select>
            </div>
            <button type="submit">Get Carbon Estimate</button>
        </form>
        </div>
  );

}

export default ElectricityForm;