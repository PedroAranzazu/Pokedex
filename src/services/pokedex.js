export async function getpokemon(nombre) {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nombre);
  return await respuesta.json();
}
