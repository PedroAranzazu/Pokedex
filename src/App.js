import { useEffect, useState } from "react";
import "./App.css";
import { getpokemon } from "./services/pokedex";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [stats, setStats] = useState([]);
  const [nombre, setNombre] = useState("132"); // Nombre inicial
  const [inputNombre, setInputNombre] = useState(""); // Control del input de búsqueda

  useEffect(() => {
    async function getdata() {
      const response = await getpokemon(nombre); // Llama a la API con el nombre actual
      setPokemon(response);
      setStats(response.stats);
    }
    getdata();
  }, [nombre]); // El useEffect se ejecuta cuando 'nombre' cambia

  // Función para manejar la búsqueda al presionar Enter
  const handleKeyDown = (tecla) => {
    if (tecla.key === "Enter") {
      setNombre(inputNombre.toLowerCase()); // Actualiza el nombre con el valor del input
    }
  };

  return (
    <div className="App">
      <div className="pokedex">
        <div className="info">
          <h2>{pokemon.name}-{pokemon.id}</h2>
          <div className="detalle-pokemon">
            <img
              className="imagen"
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
            ></img>
            <div className="stats">
              {stats.length > 0 ? (
                stats.map((stat, index) => (
                  <p key={index}>
                    <span className="pokemon-stats">{stat.stat.name}</span>
                    : {stat.base_stat}
                  </p>
                ))
              ) : (
                <p>Cargando estadísticas...</p>
              )}
            </div>
          </div>
        </div>
        <div className="acciones">
          {/* Botones para cambiar entre Pokémon predefinidos */}
          <button className="anterior boton" onClick={() => setNombre(pokemon.id - 1)}>
            anterior
          </button>
          <button className="siguiente boton" onClick={() => setNombre(pokemon.id + 1)}>
            siguiente
          </button>
        </div>
        
        <div >
          {/* Entrada de texto para buscar cualquier Pokémon */}
          <input className="buscar"
            type="text"
            placeholder="Escribe el nombre de un Pokémon"
            value={inputNombre} // Controla el valor del input
            onChange={(nuevovalor) => setInputNombre(nuevovalor.target.value)} // Actualiza el valor en tiempo real
            onKeyDown={handleKeyDown} // Busca cuando el usuario presiona Enter
          
          />
        </div>
      </div>
    </div>
  );
}

export default App;
