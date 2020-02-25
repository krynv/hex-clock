import React, { useState, useEffect } from "react";
import "./App.css";

export default () => {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()));
    return () => clearInterval(timer);
  }, []);

  const timeAsHex = () =>
    `#${today.getHours()}${(today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes()}${(today.getSeconds() < 10 ? "0" : "") +
      today.getSeconds()}`;

  return <div style={{ backgroundColor: timeAsHex() }} />;
};
