import React, { createContext, ReactNode, useState } from "react";

export interface ITimerContext {
    time: number;
    workTime: number;
    breakTime: number;
    mode: 'work' | 'break'
    setMode: React.Dispatch<React.SetStateAction<'work' | 'break'>>
}
interface TimerProviderProps {
    children: ReactNode
}

export const TimerContext = createContext<ITimerContext | null>(null)

export const TimerProvider = ({children}: TimerProviderProps) => {
    const [time, setTime] = useState(25);
    const [mode, setMode] = useState<'work' | 'break'>('work');
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    return (
        <TimerContext.Provider value={{time, mode, setMode, workTime, breakTime }}>
            {children}
        </TimerContext.Provider>
    )
}