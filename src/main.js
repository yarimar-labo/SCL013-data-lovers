import { getPokemons, filterCharactersByName } from './data.js';

//Se declara las constantes de los selects y el contenedor principal para manipular el dom.
const selectorTypePokemon = document.getElementById("types");
const selectorWeaknessPokemon = document.getElementById("weakness");
const selectorOrderPokemon = document.getElementById("order");
const cardList = document.getElementById("containerCard");


const modalOpen = (pokemon) => {
    let bodyElement = document.getElementById("Body");
    let dark = document.createElement("div");
    let win = document.createElement("div");
    let button = document.createElement("button");

    dark.id = "dark";
    win.id = "win";
    button.id = "button";
    button.innerHTML = '<i class="fas fa-times-circle"></i>';


    button.addEventListener("click", () => {
        dark.remove();
    });

    let htmlContent = '';

    htmlContent += '<div class="name">' + pokemon.name + '</div>';

    htmlContent += '       <div class="imgModal">';
    htmlContent += '  <img src="' + pokemon.img + '">'; 
    htmlContent += '        </div>';

    htmlContent += '       <div class="margenes inline-types">';
    htmlContent += '           <label>Tipo: </label>';
    htmlContent += '           <div class="margenes inline-types">';
    if (pokemon.type) {
        pokemon.type.forEach(element => {
            htmlContent += '               <span class="char _' + element.toLowerCase() + '">' + element + '</span>';
        });
    }
    htmlContent += '        </div>';
    htmlContent += '     </div>';


    htmlContent += '       <div class="margenes inline-types">';
    htmlContent += '           <label>Debilidad: </label>';
    htmlContent += '           <div class="margenes inline-types">';
    if (pokemon.weaknesses) {
        pokemon.weaknesses.forEach(element => {
            htmlContent += '               <span class="char _' + element.toLowerCase() + '">' + element + '</span>';

        });
    }
    htmlContent += '        </div>';
    htmlContent += '      </div>';


    htmlContent += '       <div class="margenes">';
    htmlContent += '          <p><label>Altura:</label> <span>' + pokemon.height + '</span></p>'; 
    htmlContent += '          <p><label>Peso:</label> <span>' + pokemon.weight + '</span></p>'; 
    htmlContent +=            '<p><label>Caramelos:</label> <span>' + pokemon.candy + '</span></p>';
    htmlContent += '        </div>';

    if (pokemon.next_evolution) {
        htmlContent += '       <div class="margenes">';
        htmlContent += '          <p><label>Evolucion</label>';
        htmlContent += '           <div class="margenes">';    
        pokemon.next_evolution.forEach(element => {
            htmlContent += '          <p><span class="">' + element.name + '</span>';
            htmlContent += '          <span>' +  '#' + element.num + '</span></p>';
        });
        htmlContent += '            </div>';
        htmlContent += '       </div>';
    }

    if (pokemon.prev_evolution) {
        htmlContent += '       <div class="margenes">';
        htmlContent +=            '<p><label>Previa Evolucion</label></p>';
        htmlContent += '            <div class="margenes">';
        pokemon.prev_evolution.forEach(element => {
            htmlContent +=             '<p><span class="">' + element.name + '</span>';
            htmlContent += '               <span>' +  '#' + element.num + '</span></p>';
        });
        htmlContent += '             </div>';
        htmlContent += '        </div>';

    }


    win.appendChild(button);
    win.insertAdjacentHTML('beforeend', htmlContent);
    dark.appendChild(win);
    bodyElement.appendChild(dark);
};

//Obtenemos los pokemones de acuerdo a los filtros.
const displayPokemon = (order = "0-9", types = "", weakness = "") => {
    let pokemons = getPokemons(order, types, weakness); //Ibocamos la funcion del modulo data getPkemon a cada uno de los elementos.

    //limpia el contenedor de pokemones
    cardList.innerHTML = '';

    //Recorre todos los elemtos del array pokemons
    pokemons.forEach((pokemon) => { //Obtengo un pokemon.
        //Se crean todos los elementos de la carta.
        let cardPokemon = document.createElement("div"
        );
        let cardLink = document.createElement("a");
        let cardName = document.createElement("p");
        let cardImagen = document.createElement("img");
        let cardNumber = document.createElement("p");

        //Se asignan las clases para aplicar estilo a cada elemento.
        cardPokemon.className = "pokemonCard";
        cardImagen.className = "pokemonImg";
        cardName.className = "pokemonName";
        cardNumber.className = "pokemonNum";

        //Se asigna los datos a cada uno de los elementos img, numero y nombre.
        cardNumber.innerText = '#' + pokemon.num;
        cardImagen.src = pokemon.img;
        cardName.innerText = pokemon.name;

        //Se argragan al elemento <a> los elementos img, numero y nombre.
        cardLink.appendChild(cardNumber);
        cardLink.appendChild(cardImagen);
        cardLink.appendChild(cardName);

        cardLink.addEventListener("click", () => {
            modalOpen(pokemon);
        });

        //Se agrega al elemento <div> el elemento <a> que contiente todos los demas elementos img, numero y nombre.
        cardPokemon.appendChild(cardLink);

        //Se agrega la carta al contenedor principal.
        cardList.appendChild(cardPokemon);
    })

    return true;

}

//Se define que se va a ejecutar hasta que terminen de cargar los documentos.
window.onload = () => {

    //Se atrapa un evento change cada vez que se alija una opcion del select.
    selectorTypePokemon.addEventListener("change", () => {
        //despliega los pokemon segun los filtros (valor de select.value) de tipos y debilidad y ordenado por el orden selecionando.
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });
    selectorWeaknessPokemon.addEventListener("change", () => {
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });

    selectorOrderPokemon.addEventListener("change", () => {
        displayPokemon(selectorOrderPokemon.value, selectorTypePokemon.value, selectorWeaknessPokemon.value);

    });

    //Se rellena los pokemones segun los filtros por defecto.
    displayPokemon();
    

}
