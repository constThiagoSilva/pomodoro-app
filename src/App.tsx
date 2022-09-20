import { ThemeProvider } from "styled-components";
import { PlayButton } from "./components/PlayButton";
import { TimerProvider } from "./context/TimerContext";
import { MainPage } from "./pages/Main";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <TimerProvider>
      <Theme>
        <div>
          <MainPage />
        </div>
      </Theme>
    </TimerProvider>
  );
}

export default App;
