import { Footer } from "./components/Footer";
import { SongSearch } from "./components/SongSearch";
import "./App.css";
import Encabezado from "./components/Encabezado";
import { FondoMusica } from "./components/FondoMusica";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <SongSearch />
      <FondoMusica />
      <Footer />
    </div>
  );
}

export default App;
