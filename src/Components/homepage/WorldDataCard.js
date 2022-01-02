import WorldDataList from "./WorldDataList";

const WorldDataCard = ({ worldData }) => {
  // Data taken from 2018
  const countries = worldData.map((data, index) => {
    return (
      <WorldDataList key={index} name={data.country} average={data.average} />
    );
  });
  return <div className="countries-data">{countries}</div>;
};

export default WorldDataCard;
