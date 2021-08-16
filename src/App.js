import { Footer } from "./components/Footer";
import { SongSearch } from "./components/SongSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Buscador de Canciones</h1>
      <SongSearch />
      <Footer />
    </div>
  );
}

export default App;
