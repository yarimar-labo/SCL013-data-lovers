import {  getPokemons } from './data.js';

//Se declara las constantes de los selects y el contenedor principal para manipular el dom.
const selectorTypePokemon = document.getElementById("types");
const selectorWeaknessPokemon = document.getElementById("weakness");
const selectorOrderPokemon = document.getElementById("order");
const  cardList = document.getElementById("containerCard");

//Obtenemos los pokemones de acuerdo a los filtros.
const displayPokemon = (order = "0-9", types = "", weakness = "") => {
    let pokemons = getPokemons(order, types, weakness); //Ibocamos la funcion del modulo data getPkemon a cada uno de los elementos.

    //limpia el contenedor de pokemones
    cardList.innerHTML = '';

    //Recorre todos los elemtos del array pokemons
    pokemons.forEach((pokemon) => { //Obtengo un pokemon.
        //Se crean todos los elementos de la carta.
        let cardPokemon = document.createElement("div");
        let cardLink = document.createElement("a");
        let cardName = document.createElement("p");
        let cardImagen = document.createElement("img");
        let cardNumber = document.createElement("p");

        cardLink.href='#'; //programar aqui el despliegue del detalle de la tarjeta.

        //Se asignan las clases para aplicar estilo a cada elemento.
        cardPokemon.className = "pokemonCard";
        cardImagen.className="pokemonImg";
        cardName.className="pokemonName";
        cardNumber.className="pokemonNum";

        //Se asigna los datos a cada uno de los elementos img, numero y nombre.
        cardNumber.innerText = '#' + pokemon.num;
        cardImagen.src = pokemon.img;
        cardName.innerText = pokemon.name;

        //Se argragan al elemento <a> los elementos img, numero y nombre.
        cardLink.appendChild(cardNumber);
        cardLink.appendChild(cardImagen);
        cardLink.appendChild(cardName);

        //Se agrega al elemento <div> el elemento <a> que contiente todos los demas elementos img, numero y nombre.
        cardPokemon.appendChild(cardLink);

        //Se agrega la carta al contenedor principal.
        cardList.appendChild(cardPokemon);
    })

    return true;

}

//Se rellena el select de los tipos
const displayTypes = () => {
    //let displayTypes = getTypes(); //Se debe programar la funcion a futuro.
    return true;

}

//Se rellena el select de las debilidades
const displayWeakness = () => {
    //let displayWeakness = getWeakness(); //Se debe programar la funcion a futuro.
    return true;

}

//Se define que se va a ejecutar hasta que terminen de cargar los documentos.
window.onload = () => {

    //Se atrapa un evento change cada vez que se alija una opcion del select.
    selectorTypePokemon.addEventListener("change",() => {
        //despliega los pokemon segun los filtros (valor de select.value) de tipos y debilidad y ordenado por el orden selecionando.
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });
    selectorWeaknessPokemon.addEventListener("change",() => {
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });

    selectorOrderPokemon.addEventListener("change",() => {
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });

    //Se rellena los pokemones segun los filtros por defecto.
    displayPokemon(); 
    //Se rellenan los tipos.
    displayTypes();
    //Se rellenan las debilidades.
    displayWeakness();

}
