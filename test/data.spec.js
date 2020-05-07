import { sortedData, arrayOrderedByName, arrayOrderedByNumber } from '../src/data.js';

// test sortedData
describe('sortedData', () => {
  test('is a function', () => {
    expect(typeof sortedData).toBe('function');
  });

  test('test sortedData a-z', () => {
    let result = sortedData('a-z')
    expect(result[0].name).toBe('Abra');
  });
});

// test arrayOrderedByName
describe('arrayOrderedByName', () => {
  test('is a function', () => {
    expect(typeof arrayOrderedByName).toBe('function');
  });

  test('return array ordered by name', () => {
    let result = arrayOrderedByName('z-a')
    expect(result[0].name).toBe('Zubat');
  });
});

// test arrayOrderedByNum
describe('arrayOrderedByNumber', () => {
  test('is a function', () => {
    expect(typeof arrayOrderedByNumber).toBe('function');
  });

  test('return array ordered by num', () => {
    let result = arrayOrderedByNumber('descendente')
    expect(result[0].num).toBe('151');
  });
});

// Example test
// describe('anotherExample', () => {
//   test('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   test('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
