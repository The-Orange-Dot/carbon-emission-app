import "../EmissionPage.css";

function ElectricityResults({
  electricityData,
  onSaveData,
  setElectricityResults,
}) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{electricityData.date.slice(0, 10)}</p>

      <h4>Country:</h4>
      <p>{electricityData.country}</p>

      <h4>State:</h4>
      <p>{electricityData.state}</p>

      <h4>Electricity used:</h4>
      <p>{electricityData.electricity_value}</p>

      <h4>Carbon Estimate (lbs): </h4>
      <p>{electricityData.carbon_lb}</p>

      <button onClick={() => onSaveData("electricityHistory", electricityData)}>
        Save to History
      </button>
      <br />
      <button
        onClick={() => setElectricityResults({ ...electricityData, id: "" })}
      >
        Go Back
      </button>
    </div>
  );
}

export default ElectricityResults;
