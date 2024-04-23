import "./App.css";
import AyurVedic from "./components/AyurVedic";
import Consultations from "./components/Consultations";
import Customers from "./components/Customers";
import { Discover } from "./components/Discover";
import Expert from "./components/Expert";
import { Heading } from "./components/Heading";

function App() {
  return (
    <>
      <div>
        <Heading />
        <Discover />
        <Consultations />
        <AyurVedic />
        <Customers />
        {/* <Expert /> */}
      </div>
    </>
  );
}

export default App;
