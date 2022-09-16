import { PlayButton } from "../../components/PlayButton"
import { Container, Content, Timer } from "./styles"

export const MainPage = () => {
    return (
        <Container>
            <Content>
                <Timer>
                    <span>00:00</span>
                </Timer>
                <PlayButton/>
            </Content>
        </Container>
    )
}