import "./App.css";
import AyurVedic from "./components/AyurVedic";
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
        <AyurVedic />a
      </div>
    </>
  );
}

export default App;
