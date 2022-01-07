import "../EmissionPage.css";

import "../EmissionPage.css";

function ShippingResults({ shippingData, onSaveData, setShippingResults }) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{shippingData.date.slice(0, 10)}</p>

      <h4>Item Weight (lbs):</h4>
      <p>{shippingData.weight}</p>

      <h4>Shipment Distance (mi):</h4>
      <p>{shippingData.distance}</p>

      <h4>Carbon Estimate (lbs): </h4>
      <p>{shippingData.carbon_lb}</p>
      <div>
        <button onClick={() => onSaveData("shippingHistory", shippingData)}>
          Save to History
        </button>
        <button onClick={() => setShippingResults({ ...shippingData, id: "" })}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ShippingResults;
