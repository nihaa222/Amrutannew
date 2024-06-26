import "./App.css";
import AyurVedic from "./components/AyurVedic";
import Consultations from "./components/Consultations";
import Customers from "./components/Customers";
import { Discover } from "./components/Discover";
import Expert from "./components/Expert";
import Footer from "./components/Footer";
import { Heading } from "./components/Heading";
import Phone from "./components/Phone";

function App() {
  return (
    <>
      <div>
        <Heading />
        <Discover />
        <Consultations />
        <AyurVedic />
        <Customers />
        <Expert />
        <Phone />
        <Footer />
      </div>
    </>
  );
}

export default App;
