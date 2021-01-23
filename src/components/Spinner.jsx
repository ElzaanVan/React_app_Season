import React from "react";

const style = {
  backgroundColor: "#8db596",
  backgroundImage:
    "url(https://www.transparenttextures.com/patterns/subtle-zebra-3d.png)"
};

function Spinner(props) {
  return (
    <div className="ui active dimmer" style={style}>
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
}

Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
