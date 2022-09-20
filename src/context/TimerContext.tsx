import React, { createContext, ReactNode, useState } from "react";

interface ITimerContext {
    time: number;
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
    return (
        <TimerContext.Provider value={{time, mode, setMode}}>
            {children}
        </TimerContext.Provider>
    )
}