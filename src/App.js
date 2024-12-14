import "./App.css";
import { Footer } from "./components/Footer";
import { FormSection } from "./components/FormSection";
import { LandingSection } from "./components/LandingSection";
import { MovieSection } from "./components/MovieSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <LandingSection />
      <MovieSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
