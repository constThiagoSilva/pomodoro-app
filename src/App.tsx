import { Pomodoro } from "./components/Pomodoro";
import { TimerProvider } from "./context/TimerContext";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <TimerProvider>
      <Theme>
        <div>
          <Pomodoro />
        </div>
      </Theme>
    </TimerProvider>
  );
}

export default App;
