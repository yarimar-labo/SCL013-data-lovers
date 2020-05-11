import { getPokemons} from '../src/data.js';


describe('getPokemons', () => {
  test('es una funcion', () => {
    expect(typeof getPokemons).toBe('function');
  });

  test('Deberia retornar los pokemones ordenados del 0 al 9', () => {
    expect(getPokemons("0-9")[0].name).toEqual('Bulbasaur');
  });

  test('Deberia retornar los pokemones ordenados del 9 al 0', () => {
    expect(getPokemons("9-0")[0].name).toEqual('Mew');
  });

  test('Deberia retornar los pokemones ordenados de la A al Z', () => {
    expect(getPokemons("AZ")[0].name).toEqual('Abra');
  });

  test('Deberia retornar los pokemones ordenados de la Z al A', () => {
    expect(getPokemons("ZA")[0].name).toEqual('Zubat');
  });

  test('Testea filtro de tipos agua', () => {
    expect(getPokemons("0-9", "Water")[0].name).toEqual('Squirtle');
  });

  test('Testea filtro de debilidad con ejemplo agua', () => {
    expect(getPokemons("0-9", "", "Water")[0].name).toEqual('Charmander');
  });

  test('Testea filtro de tipo y debilidad con ejemplo agua y tierra', () => {
    expect(getPokemons("0-9", "Ground", "Water")[0].name).toEqual('Sandshrew');
  });

});