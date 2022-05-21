import "./App.css";
import FrequentQuestion from "./Components/FrequentQuestion/FrequentQuestion";
import Header from "./Components/Header/Header";
import Instruments from "./Components/Instruments/Instruments";

function App() {
  return (
    <div>
      <Header></Header>
      <Instruments></Instruments>
      <FrequentQuestion></FrequentQuestion>
    </div>
  );
}

export default App;
