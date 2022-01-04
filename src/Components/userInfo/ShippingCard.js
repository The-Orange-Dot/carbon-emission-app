function ShippingCard({ shipment, onShipmentDelete }) {
  return (
    <div className="flight-card">
      <h4 className="card-header">{shipment.date.slice(0, 10)}</h4>
      <ul>
        <p>Weight: {shipment.weight} lbs</p>
        <p>Distance: {shipment.distance} mi</p>
        <p>Shipment method: {shipment.method}</p>
        <div>
          <p>Estimated carbon emission: </p>
          <p>
            <strong> {shipment.carbon_lb} lbs</strong>
          </p>
        </div>
      </ul>
      <button
        onClick={() => onShipmentDelete(shipment)}
        className="carbon-estimate-btn"
      >
        Delete Shipment
      </button>
    </div>
  );
}

export default ShippingCard;
