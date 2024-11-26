import { Typography } from "@mui/material";
import { CustomButton } from "../../../shared/components";
import { useCallback, useRef, useState } from "react";

export const Timer = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  // const isStarted = useRef<boolean>(false);
  const timerId = useRef<number | null>(null);

  const timerHandler = useCallback(() => {
    if (!isStarted) {
      const newTimerId = setInterval(() => {
        setCounter((prevCounter) => {
          return prevCounter + 1;
        });
      }, 1000);
      timerId.current = newTimerId;
      // console.log(timerId.current);

      setIsStarted(true);
      // isStarted.current = true;
    } else {
      //as number
      // clearInterval(timerId.current as number);
      if (timerId.current) {
        clearInterval(timerId.current);
      }

      setIsStarted(false);
      // isStarted.current = false;
    }
  }, [isStarted]);

  const stopTimerHadler = useCallback(() => {
    setCounter(0);
  }, []);

  return (
    <>
      <CustomButton
        // isStarted.current - через Ref
        color={isStarted ? "error" : "success"}
        onClick={timerHandler}
      >
        {isStarted ? "Stop" : "Start"}
      </CustomButton>
      <CustomButton color="error" onClick={stopTimerHadler}>
        Сброс
      </CustomButton>
      <Typography>{counter}</Typography>
    </>
  );
};
