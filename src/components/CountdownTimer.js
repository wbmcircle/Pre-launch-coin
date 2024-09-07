import React, { useState, useEffect } from "react";
import Chip from '@mui/material/Chip';

const CountdownTimer = ({ targetDateTime, returnType }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDateTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Determine CSS class based on time left
  const getClassBasedOnTimeLeft = () => {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      // return "launched"; 
      return <Chip label="Launched" sx={{ backgroundColor: '#004727', marginLeft: '10px', color: '#fff' }} />;
    } else if (timeLeft.days === 0) {
      return <Chip label="Launching Soon" sx={{ backgroundColor: '#c99810', marginLeft: '10px', color: '#fff' }} />;
    } else {
      return <Chip label="Launching Later" sx={{ backgroundColor: '#2e2e2e', marginLeft: '10px', color: '#fff' }} />;
    }
  };

  // Render the countdown timer
  const renderTimer = () => {
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }

      timerComponents.push(
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    return (
      <div>
        {timerComponents.length ? timerComponents : <span>Launched Successfully</span>}
      </div>
    );
  };

  // Determine what to return based on the `returnType` prop
  if (returnType === "timer") {
    return renderTimer();
  } else if (returnType === "class") {
    return getClassBasedOnTimeLeft();
  } else {
    return null;
  }
};

export default CountdownTimer;
