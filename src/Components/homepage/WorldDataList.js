const WorldDataList = ({ name, average }) => {
  return (
    <div>
      <p>
        {name} : {Math.round(average * 100 * 2.20462) / 100} lbs
      </p>
    </div>
  );
};

export default WorldDataList;
