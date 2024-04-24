import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo = "Tu camino a la musica empieza aqui! " />
    </div>
  );
}

export default App;
