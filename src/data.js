import data from './data/pokemon/pokemon.js';

// Devuelve un array ordenado numerica o alfabeticamente al compararlo con su condition seleccionada.
export const sortedData = (condition) => {

  if (condition === "ascendente" || condition === "descendente") {
    return arrayOrderedByNumber(condition);
  }
  else if (condition === "a-z" || condition === "z-a") {
    return arrayOrderedByName(condition);
  }
}

// Devuelve un array ordenado alfabeticamente
export const arrayOrderedByName = (condition) => {
  let sortedArray = data.pokemon.sort(function (a, b) {

    if (condition === "a-z") {
      // Devuelve un resultado a traves de operador ternario
      return (a.name > b.name) ? 1 : -1
    }
    else if (condition === "z-a") {
      return (b.name > a.name) ? 1 : -1
    }
  });
  return sortedArray;
}

// Devuelve un array ordenado numericamente
export const arrayOrderedByNumber = (condition) => {
  let sortedArray = data.pokemon.sort(function (p1, p2) {

    if (condition === "ascendente") {
      return (p1.id - p2.id);
    }
    else if (condition === "descendente") {
      return (p2.id - p1.id);
    }
  });
  return sortedArray;
}

