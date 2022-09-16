import { ThemeProvider } from "styled-components";
import { PlayButton } from "./components/PlayButton";
import { MainPage } from "./pages/Main";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <Theme>
      <div>
        <MainPage />
      </div>
    </Theme>
  );
}

export default App;
