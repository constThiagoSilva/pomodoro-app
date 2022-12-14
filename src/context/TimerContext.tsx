import React, { createContext, ReactNode, useState } from "react";

export interface ITimerContext {
    workTime: number;
    breakTime: number;
    mode: 'work' | 'break'
    setMode: React.Dispatch<React.SetStateAction<'work' | 'break'>>
    setWorkTime: React.Dispatch<React.SetStateAction<number>>
    setBreakTime: React.Dispatch<React.SetStateAction<number>>
}
interface TimerProviderProps {
    children: ReactNode
}

export const TimerContext = createContext<ITimerContext | null>(null)

export const TimerProvider = ({children}: TimerProviderProps) => {
    const [mode, setMode] = useState<'work' | 'break'>('work');
    const [workTime, setWorkTime] = useState(3);
    const [breakTime, setBreakTime] = useState(2);

    return (
        <TimerContext.Provider value={{mode, setMode, workTime, breakTime, setBreakTime, setWorkTime }}>
            {children}
        </TimerContext.Provider>
    )
}