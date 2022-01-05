// import Estimate from "../Estimate";
// import React, { useState } from "react";

// export const ShippingFormState = () => {
//
//   const [shippingResults, setShippingResults] = useState({
//     date: "",
//     weight: 0,
//     distance: 0,
//     method: "",
//     carbon_lb: 0,
//     id: "",
//   });

//   function handleShippingFormSubmit(shippingData) {
//     fetch(API, {
//       method: "POST",

//       headers: {
//         Authorization: API_KEY,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         type: "shipping",
//         weight_value: shippingData.weight,
//         weight_unit: "lb",
//         distance_value: shippingData.distance,
//         distance_unit: "mi",
//         transport_method: shippingData.method,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((shippingData) => {
//         setShippingResults({
//           date: shippingData.data.attributes.estimated_at,
//           weight: shippingData.data.attributes.weight_value,
//           distance: shippingData.data.attributes.distance_value,
//           method: shippingData.data.attributes.transport_method,
//           carbon_lb: shippingData.data.attributes.carbon_lb,
//           id: shippingData.data.id,
//         });
//       });
//   }

//   return (
//     <Estimate
//       handleShippingFormSubmit={handleShippingFormSubmit}
//       shippingResults={shippingResults}
//     />
//   );
// };
