// import Estimate from "../Estimate";
// import React, { useState } from "react";

// const FlightFormState = () => {

//   const [flightResults, setFlightResults] = useState({
//     date: "",
//     passengers: "",
//     departure: "",
//     destination: "",
//     carbon_lb: 0,
//     id: "",
//   });

//   function handleFlightFormSubmit(formData) {
//     fetch("https://www.carboninterface.com/api/v1/estimates", {
//       method: "POST",

//       headers: {
//         Authorization: "Bearer 55NshTJnqIgD0wWtt246eg",
//         "Content-Type": "application/json",
//       },

//       body: JSON.stringify({
//         type: "flight",
//         passengers: formData.passengers,
//         legs: [
//           {
//             departure_airport: formData.origin,
//             destination_airport: formData.destination,
//           },
//         ],
//         distance_unit: "mi",
//       }),
//     })
//       .then((resp) => resp.json())
//       .then((flightData) =>
//         setFlightResults({
//           date: flightData.data.attributes.estimated_at,
//           passengers: flightData.data.attributes.passengers,
//           departure: flightData.data.attributes.legs[0].departure_airport,
//           destination: flightData.data.attributes.legs[0].destination_airport,
//           carbon_lb: flightData.data.attributes.carbon_lb,
//           id: flightData.data.id,
//         })
//       );
//   }

//   return (
//     <Estimate
//       flightResults={flightResults}
//       handleFlightFormSubmit={handleFlightFormSubmit}
//       setFlightResults={setFlightResults}
//     />
//   );
// };

// export default FlightFormState;
