import data from './data/pokemon/pokemon.js';

//Se extrae el array de pokemon
export const pokemons = data.pokemon;

//Con esta funcion filtramos y ordenamos por numero, tipo y debilidad, y se duplica para no alterar la data original
export const getPokemons = (order = '0-9', typePokemon = '', weaknessPokemon = '') => {
  let filterType = [typePokemon];
  let filterWeakness = [weaknessPokemon];
  //Devuelve una copia del array.
  let listPokemons = [...pokemons];

  //Si el tipo de pokemon es diferente a '' se aplica el filtro, si es igual a '' no se aplica ningun filtro sobre el tipo.
  if (typePokemon != '') {
    //Filtra el array de los pokemones utilizando filter para todos aquellos que contengan al menos 1 coincidencia del tipo pasado.
    listPokemons = listPokemons.filter(pokemon => pokemon.type.some(typePokemon => filterType.includes(typePokemon)));
  }

  if (weaknessPokemon != '') {
    listPokemons = listPokemons.filter(pokemon => pokemon.weaknesses.some(wkPokemon => filterWeakness.includes(wkPokemon)));
  }

  //Se utiliza para evaluar diferentes casos de una variable que serian ordenar de (AZ O numero ascendente y desentente).
  switch (order) {
    case "ZA":
      //Devuelve el array ordenado alfabeticamente o dependiendo la opcion elegida.
      listPokemons.sort((pokemon1, pokemon2) => {
      //devuelve un resultado a trevez de operador ternario.
        return pokemon1.name < pokemon2.name ? 1 : -1;
      });
      break;
    case "0-9":
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.num > pokemon2.num ? 1 : -1;
      });
      break;
    case "9-0":
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.num < pokemon2.num ? 1 : -1;
      });
      break;
    default:
      listPokemons.sort((pokemon1, pokemon2) => {
        return pokemon1.name > pokemon2.name ? 1 : -1;
      });
  }
  return listPokemons;
}
