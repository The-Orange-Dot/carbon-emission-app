function ShippingResults({ shippingData, onSaveShippingClick }) {
  return (
    <div>
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{shippingData.date}</p>

      <h4>Item Weight (lbs):</h4>
      <p>{shippingData.weight}</p>

      <h4>Shipment Distance (mi):</h4>
      <p>{shippingData.distance}</p>

      <h4>Carbon Estimate (lbs): </h4>
      <p>{shippingData.carbon_lb}</p>

      <button onClick={() => onSaveShippingClick(shippingData)}>
        Save to History
      </button>
    </div>
  );
}

export default ShippingResults;
