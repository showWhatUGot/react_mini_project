import { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  const currentTime = () => {
    const date = new Date();
    setTime(date.toLocaleTimeString());
  };

  const intervalTime = () => {
    setInterval(currentTime, 1000);
  };

  intervalTime();

  return <div className="clock">{time}</div>;
};

export default Clock;
