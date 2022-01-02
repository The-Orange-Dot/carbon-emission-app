import WorldDataList from "./WorldDataList";

const WorldDataCard = ({ worldData }) => {
  // Data taken from 2018
  const countries = worldData.map((data) => {
    return <WorldDataList name={data.country} average={data.average} />;
  });
  return (
    <div>
      <div>{countries}</div>
    </div>
  );
};

export default WorldDataCard;
