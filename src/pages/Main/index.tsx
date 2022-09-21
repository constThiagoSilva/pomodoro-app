import { useContext, useEffect, useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { ITimerContext, TimerContext } from "../../context/TimerContext";
import { Container, Content, Timer } from "./styles";

export const MainPage = () => {
  const { setMode, mode,breakTime,workTime } = useContext(TimerContext) as ITimerContext;
  const [minutesLeft, setMinutesLeft] = useState(workTime);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isPlayed) {
        clearInterval(interval);

        if (secondsLeft === 0) {
          if (minutesLeft !== 0) {
            setSecondsLeft(59);
            setMinutesLeft(minutesLeft - 1);
          } else {
            if (mode === 'work') {
                setMode('break')

                setMinutesLeft(breakTime)
                setIsPlayed(false)
            } else {
                setMode('work')

                setMinutesLeft(workTime)
                setIsPlayed(false)
            }
          }
        } else {
          setSecondsLeft(secondsLeft - 1);
        }
      }
    }, 1000);
  }, [secondsLeft, isPlayed]);

  return (
    <Container>
      <Content>
        <Timer>
          <span>
            {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
            {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
            <h1>
            {mode === 'work' ? 'Work mode' : 'Break mode'}
            </h1>
          </span>
        </Timer>
        <PlayButton isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      </Content>
    </Container>
  );
};
