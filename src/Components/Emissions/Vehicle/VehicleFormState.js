// import { VehicleFormCard } from "./VehicleFormCard";
// import React, { useState } from "react";

// export const VehicleFormState = () => {

//   const [vehicleResults, setVehicleResults] = useState({
//     date: "",
//     distance_value: 0,
//     distance_unit: "",
//     vehicle_make: "",
//     vehicle_model: "",
//     vehicle_year: "",
//     carbon_lb: 0,
//     id: "",
//   });

//   function handleVehicleFormSubmit(vehicleFormData) {
//     fetch(API, {
//       method: "POST",

//       headers: {
//         Authorization: API_KEY,
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         type: "vehicle",
//         distance_unit: "mi",
//         distance_value: vehicleFormData.distance_value,
//         vehicle_model_id: vehicleFormData.vehicle_model_id,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((vehicleData) =>
//         setVehicleResults({
//           date: vehicleData.data.attributes.estimated_at,
//           distance_value: vehicleData.data.attributes.distance_value,
//           distance_unit: vehicleData.data.attributes.distance_unit,
//           vehicle_make: vehicleData.data.attributes.vehicle_make,
//           vehicle_model: vehicleData.data.attributes.vehicle_model,
//           vehicle_year: vehicleData.data.attributes.vehicle_year,
//           carbon_lb: vehicleData.data.attributes.carbon_lb,
//           id: vehicleData.data.id,
//         })
//       );
//   }
//   return (
//     <VehicleFormCard
//       vehicleResults={vehicleResults}
//       handleVehicleFormSubmit={handleVehicleFormSubmit}
//     />
//   );
// };
