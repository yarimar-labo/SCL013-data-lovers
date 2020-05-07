import { sortedData } from './data.js';
import data from './data/pokemon/pokemon.js';


const selectOrder = document.getElementById("selectOrder");
// Evento por el cual imprimimos las pokemonCard ordenadas alfabetica y numericamente.
selectOrder.addEventListener("change", () => {
  // Accedemos a la opcion del select a traves de selectedIndex, el cual nos devuelve su value.
  let condition = selectOrder.options[selectOrder.selectedIndex].value;
  // Limpiar CardContainer
  clearCardContainer();
  // Obtener array procesado
  let result = sortedData(condition);
  // Imprimir array en pantalla como tarjetas
  printPokemonCard(result)
})

/*
// HELPERS: (funciones que te ayudan a hacer cosas)
*/

// Recibe un array de pokemon y los agrega al div containerCard como pokemonCard
const printPokemonCard = (datapokemon) => {
  datapokemon.forEach(function (pokemon) {
    let pokemonCard = createPokemonCard(pokemon);
    showPokemonCard(pokemonCard)
  })
}
// Borra todo el contenido dentro del <div containerCard>
const clearCardContainer = () => {
  let visiblePokemonCards = document.getElementById("containerCard").querySelectorAll(".pokemonCard");

  visiblePokemonCards.forEach(function (pokemonCard){
    pokemonCard.remove();
  })
}
// Crea los <div pokemonCard> en cardContainer
const createPokemonCard = (pokemon) => {
    let pokemonCard = document.createElement("div");
        pokemonCard.className += "pokemonCard";
    let pokemonNum = document.createElement("p");
        pokemonNum.innerHTML = "#" +pokemon.num;
        pokemonNum.className += "pokemonNum"
    let pokemonImg = document.createElement("img");
        pokemonImg.src = pokemon.img;
        pokemonImg.className += "pokemonImg"
    let pokemonName = document.createElement("p");
        pokemonName.innerHTML = pokemon.name;
        pokemonName.className += "pokemonName"

    pokemonCard.appendChild(pokemonNum);
    pokemonCard.appendChild(pokemonImg);
    pokemonCard.appendChild(pokemonName);

    return pokemonCard;
}
// Imprime los <div pokemonCard> en cardContainer
const showPokemonCard = (pokemonCard) => {
    let containerCard = document.getElementById("containerCard");
    containerCard.appendChild(pokemonCard);
}

// Imprimo todos los pokemon al inicializar la pagina.
printPokemonCard(data.pokemon)


// SEARCH
const search = document.getElementById("search");

search.addEventListener()
// TO DO

//
