import { ThemeProvider } from "styled-components";
import { PlayButton } from "./components/PlayButton";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <Theme>
      <div className="App">Hello</div>
      <PlayButton/>
    </Theme>
  );
}

export default App;
