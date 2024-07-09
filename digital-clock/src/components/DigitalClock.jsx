import { useEffect, useState } from "react";
import "./digitalclock.css";

const DigitalClock = () => {
  const [currenTime, setCurrenTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrenTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currenTime.getHours()))}:
          {formatTimeWithLeadingZero(currenTime.getMinutes())}:
          {formatTimeWithLeadingZero(currenTime.getSeconds())}
          {currenTime.getHours()>=12?" PM":" AM"}
        </div>
        <div className="date">{formatDate(currenTime)}</div>
      </div>
    </>
  );
};

export default DigitalClock;
