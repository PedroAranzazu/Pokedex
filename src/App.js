import { useEffect, useState } from "react";
import "./App.css";
import { getpokemon } from "./services/pokedex";

function App() {
  const [pokemon, setpokemon] = useState({});
  useEffect(() => {
    async function getdata() {
      const response = await getpokemon("mewtwo");
      setpokemon(response);
      console.log(pokemon);
    }
    getdata();
  }, []);

  return (
    <div className="App">
      <div className="pokedex">
        <div className="info">
          <h2>{pokemon.name}</h2>
          <div className="detalle-pokemon">
            <img className="imagen" src={pokemon.sprites?.front_default}></img>
            <div className="stats">
              <p>Hp:10</p>
              <p>Attack:10</p>
              <p>Defense:10</p>
            </div>
          </div>
        </div>
        <div className="acciones">
          <button className="anterior">anterior</button>
          <button className="siguiente">siguiente</button>
        </div>
        <div className="buscar">
          <input type="text"></input>
        </div>
      </div>
    </div>
  );
}

export default App;
