import "./App.css";
import Consultations from "./components/Consultations";
import { Discover } from "./components/Discover";
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
      <div>
        <Heading />
        <Discover />
        <Consultations />
      </div>
    </>
  );
}

export default App;
