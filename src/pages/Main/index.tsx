import { useEffect, useState } from "react";
import { PlayButton } from "../../components/PlayButton"
import { Container, Content, Timer } from "./styles"

export const MainPage = () => {
    const [minutes, setMinutes] = useState(10);
    const [minutesLeft, setMinutesLeft] = useState(2);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [isPlayed, setIsPlayed] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval)

            if (secondsLeft === 0) {
                if (minutesLeft !== 0) {
                    setSecondsLeft(59)
                    setMinutesLeft(minutesLeft - 1)
                }
            } else {
                setSecondsLeft(secondsLeft - 1)
            }

        }, 1000)
    }, [secondsLeft]);

    return (
        <Container>
            <Content>
                <Timer>
                    <span>
                        {minutesLeft < 9 ? `0${minutesLeft}` : minutesLeft}:{secondsLeft < 9 ? `0${secondsLeft}` : secondsLeft}
                    </span>
                </Timer>
                <PlayButton isPlayed={isPlayed} setIsPlayed={setIsPlayed}/>
            </Content>
        </Container>
    )
}