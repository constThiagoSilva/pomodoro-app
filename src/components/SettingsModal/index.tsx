import React, { useContext } from "react";
import { ITimerContext, TimerContext } from "../../context/TimerContext";
import { Overlay, Content } from "./styles";
import {AiOutlineClose as Close} from 'react-icons/ai'

interface SettingsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const SettingsModal = ({ isOpen, closeModal }: SettingsModalProps) => {
  const { breakTime, workTime, setWorkTime, setBreakTime } = useContext(
    TimerContext
  ) as ITimerContext;

  if (!isOpen) return null;
  return (
    <Overlay>
      <Content>
        <div className="close-modal" onClick={closeModal}>
            <Close/>
        </div>
        <div className="input-container">
            <span>Work Time</span>
          <input
            type="number"
            value={workTime}
            onChange={(event) => setWorkTime(Number(event.target.value))}
          />
        </div>
        <div className="input-container">
        <span>Break Time</span>
          <input
            type="number"
            value={breakTime}
            onChange={(event) => setBreakTime(Number(event.target.value))}
          />
        </div>
      </Content>
    </Overlay>
  );
};
