import React, { useState } from "react";
import { Container } from "./styles"
import {BsPlayFill as Play} from 'react-icons/bs'
import {BsFillPauseFill as Pause} from 'react-icons/bs'

interface PlayButton {
    isPlayed: boolean;
    setIsPlayed: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayButton = ({isPlayed, setIsPlayed}: PlayButton) => {
    return (
        <Container onClick={() => setIsPlayed(!isPlayed)}>
            {isPlayed ? (
                <Pause/>
                ): (
                <Play/>
            )}
        </Container>
    )
}