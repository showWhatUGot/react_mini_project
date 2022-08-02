import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  const currentTime = () => {
    setTime(new Date().toLocaleTimeString());
  };

  const intervalTime = () => {
    setInterval(currentTime, 1000);
  };

  intervalTime();

  return <div className="clock">{time}</div>;
};

export default Clock;
