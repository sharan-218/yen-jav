import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Navbar from "./components/nav/Navbar";
import LocationCard from "./components/locCard/LocationCard";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <LocationCard />
    </>
  );
}

export default App;
