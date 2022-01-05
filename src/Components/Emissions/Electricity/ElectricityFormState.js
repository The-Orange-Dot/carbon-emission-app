// import Estimate from "../Estimate";
// import React, { useState } from "react";

// export const ElectricityFormState = () => {
//   const API = process.env.REACT_APP_CARBONINTERFACE_API;
//   const API_KEY = process.env.REACT_APP_CARBONINTERFACE_KEY;

//   const [electricityResults, setElectricityResults] = useState({
//     date: "",
//     country: "",
//     state: "",
//     electricity_value: "",
//     carbon_lb: 0,
//     id: "",
//   });

//   function handleElectricityFormSubmit(elecrticityData) {
//     fetch(API, {
//       method: "POST",

//       headers: {
//         Authorization: API_KEY,
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         type: "electricity",
//         electricity_unit: "kwh",
//         electricity_value: elecrticityData.electricity_value,
//         country: "us",
//         state: elecrticityData.state,
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((results) => {
//         console.log(results);
//         setElectricityResults({
//           date: results.data.attributes.estimated_at,
//           country: "US",
//           state: results.data.attributes.state.toUpperCase(),
//           electricity_value: results.data.attributes.electricity_value,
//           carbon_lb: results.data.attributes.carbon_lb,
//           id: results.data.id,
//         });
//       });
//   }

//   return (
//     <Estimate
//       electricityResults={electricityResults}
//       handleElectricityFormSubmit={handleElectricityFormSubmit}
//     />
//   );
// };
