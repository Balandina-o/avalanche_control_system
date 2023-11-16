import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";

const TimeMaster = observer((props) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  React.useEffect(() => {
    handleStart();
  }, []);

  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  React.useEffect(() => {
    setIsPaused(!isPaused);
  }, [props.yagami]);

  return (
    <div className="stop-watch pt-4 pl-5">
      <b>
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </b>
    </div>
  );
});

export default TimeMaster;
