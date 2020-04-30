import { example } from './data.js';

import data from './data/pokemon/pokemon.js';

const datapokemon = data.pokemon;



datapokemon.forEach(function (pokemon) {
    //names.push(pokemon.name);
    let pokemonCard = createCard(pokemon);
    showPokemonCard(pokemonCard)
})

function createCard(pokemon) {
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

function showPokemonCard(pokemonCard) {
    let containerCard = document.getElementById("containerCard");
    containerCard.appendChild(pokemonCard);
}

// console.log(example, data);
