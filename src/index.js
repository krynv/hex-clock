import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import invert from "invert-color";

import "./index.css";

const App = () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()));
    return () => clearInterval(timer);
  }, []);

  const getHexTriplet = () =>
    `#${(today.getHours() < 10 ? "0" : "") +
      today.getHours()}${(today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes()}${(today.getSeconds() < 10 ? "0" : "") +
      today.getSeconds()}`;

  return (
    <div
      style={{
        backgroundColor: getHexTriplet(),
        color: invert(getHexTriplet(), true),
        minHeight: "100%"
      }}
    >
      <div style={{ textAlign: "center", minHeight: "100%" }}>
        {getHexTriplet()}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
