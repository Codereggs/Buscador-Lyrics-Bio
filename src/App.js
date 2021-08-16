import { Footer } from "./components/Footer";
import { SongSearch } from "./components/SongSearch";
import "./App.css";
import Encabezado from "./components/Encabezado";

function App() {
  return (
    <div className="App">
      <Encabezado />
      <SongSearch />
      <Footer />
    </div>
  );
}

export default App;
