import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import MainPresentation from "./components/MainPresentation/MainPresentation.jsx";
import SelectionProcess from "./components/SelectionProcess/SelectionProcess.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Sponsors from "./components/Sponsors/Sponsors";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainPresentation />
      <SelectionProcess />
      <Projects />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
