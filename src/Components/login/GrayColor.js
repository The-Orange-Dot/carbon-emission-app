const GrayColor = ({ setHideNewForm, hideNewForm }) => {
  const grayClickHandler = (event) => {
    setHideNewForm(true);
    console.log((event.target.className = "hidden"));
  };

  return (
    <div
      className={hideNewForm ? "hidden" : "gray"}
      onClick={grayClickHandler}
    ></div>
  );
};

export default GrayColor;
