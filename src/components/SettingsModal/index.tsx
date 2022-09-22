import React, { useContext } from "react"
import { ITimerContext, TimerContext } from "../../context/TimerContext"
import { Overlay, Content } from "./styles"

interface SettingsModalProps {
    isOpen: boolean,
    closeModal: () => void
}

export const SettingsModal = ({isOpen, closeModal}: SettingsModalProps) => {
    const {breakTime, workTime, setWorkTime,setBreakTime} = useContext(TimerContext) as ITimerContext

    if (!isOpen) return null
    return (
        <Overlay onBlur={() => closeModal()}>
            <Content>
                <input type="number" value={workTime} onChange={(event) => setWorkTime(Number(event.target.value))}/>
                <input type="number" value={breakTime} onChange={(event) => setBreakTime(Number(event.target.value))}/>
            </Content>
        </Overlay>
    )
}