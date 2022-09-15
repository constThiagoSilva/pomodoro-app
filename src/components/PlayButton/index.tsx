import { useState } from "react";
import { Container } from "./styles"

export const PlayButton = () => {
    const [isPLayed, setIsPLayed] = useState(false);
    return (
        <Container onClick={() => setIsPLayed(!isPLayed)}>
            PLay
        </Container>
    )
}