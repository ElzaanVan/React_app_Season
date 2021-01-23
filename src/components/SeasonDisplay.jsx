import React from "react";

const SeasonConfig = {
  Summer: {
    text: "It's Summer - let's hit the Beach!",
    iconName: "sun"
  },
  Winter: {
    text: "It's Winter - how about a hot cocoa?",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = SeasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`iconLeft massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`iconRight huge ${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay;
