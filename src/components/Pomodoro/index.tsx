import { useContext, useEffect, useState } from "react";
import { ITimerContext, TimerContext } from "../../context/TimerContext";
import { PlayButton } from "../PlayButton";
import { SettingsModal } from "../SettingsModal";
import { Container, Content, SettingsContainer, Timer } from "./styles";
import { IoSettingsSharp as Settings } from "react-icons/io5";

export const Pomodoro = () => {
  const { setMode, mode, breakTime, workTime } = useContext(
    TimerContext
  ) as ITimerContext;
  const [minutesLeft, setMinutesLeft] = useState(workTime);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isPlayed) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (secondsLeft === 0) {
          if (minutesLeft !== 0) {
            setSecondsLeft(59);
            setMinutesLeft(minutesLeft - 1);
          } else {
            if (mode === "work") {
              setMode("break");

              setMinutesLeft(breakTime);
              setIsPlayed(false);
            } else {
              setMode("work");

              setMinutesLeft(workTime);
              setIsPlayed(false);
            }
          }
        } else {
          setSecondsLeft(secondsLeft - 1);
        }
      }, 1000);
    } else {
      console.log("pauyseee");
    }
  }, [secondsLeft, isPlayed]);

  useEffect(() => {
    if (mode === "work") {
      setSecondsLeft(0);
      setMinutesLeft(workTime);
    } else {
      setSecondsLeft(0);
      setMinutesLeft(breakTime);
    }
  }, [workTime, breakTime]);

  return (
    <Container>
      <Content>
        <span>Pomodoro App</span>
        <Timer>
          <span>
            {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
            {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
            <h3>{mode === "work" ? "Work mode" : "Break mode"}</h3>
          </span>
        </Timer>
        <PlayButton isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
        <SettingsContainer>
          <Settings onClick={() => {
            setIsPlayed(false);
            setIsOpen(true)}
        } />
        </SettingsContainer>
      </Content>
      <SettingsModal isOpen={isOpen} closeModal={handleCloseModal} />
    </Container>
  );
};
