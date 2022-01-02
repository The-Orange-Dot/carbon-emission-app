const WorldDataList = ({ name, average }) => {
  return (
    <div>
      <p className="emission-by-countries">
        {name} : {Math.round(average)} lbs
      </p>
    </div>
  );
};

export default WorldDataList;
