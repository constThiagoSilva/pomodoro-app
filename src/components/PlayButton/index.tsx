import { useState } from "react";
import { Container } from "./styles"
import {BsPlayFill as Play} from 'react-icons/bs'
import {BsFillPauseFill as Pause} from 'react-icons/bs'

export const PlayButton = () => {
    const [isPLayed, setIsPLayed] = useState(false);
    return (
        <Container onClick={() => setIsPLayed(!isPLayed)}>
            {isPLayed ? (
                <Play/>
            ): (
                <Pause/>
            )}
        </Container>
    )
}