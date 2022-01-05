import "../EmissionPage.css";

import "../EmissionPage.css";

function ShippingResults({ shippingData, onSaveData }) {
  return (
    <div className="emission-popup">
      <h3>Carbon Estimate:</h3>

      <h4>Date: </h4>
      <p>{shippingData.date}</p>

      <h4>Item Weight (lbs):</h4>
      <p>{shippingData.weight}</p>

      <h4>Shipment Distance (mi):</h4>
      <p>{shippingData.distance}</p>

      <h4>Carbon Estimate (lbs): </h4>
      <p>{shippingData.carbon_lb}</p>

      <button onClick={() => onSaveData(shippingData)}>
        Save to History
      </button>
    </div>
  );
}

export default ShippingResults;
