import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Componets/Hero";
import Cleaning from "./Componets/Cleaning";
import Understanding from "./Componets/Understanding";
import Blasting from "./Componets/Blasting";
import Behind from "./Componets/Behind";
import Numbers from "./Componets/Numbers";
import Meet from "./Componets/Meet";
import Blast from "./Componets/Blast";
import Insights from "./Componets/Insights";
import Mailing from "./Componets/Mailing";
import Footer from "./Componets/Footer";
import Faq from "./Componets/Faq";
import Latest from "./Componets/Latest";

function App() {
  return (
    <div className="App">
      <Hero />
      <Cleaning />
      <Understanding />
      <Blasting />
      <Behind />
      <Numbers />
      <Latest />
      <Meet />
      <Faq />
      <Blast />
      <Insights />
      <Mailing />
      <Footer />
    </div>
  );
}

export default App;
