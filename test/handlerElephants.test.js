const handlerElephants = require('../src/handlerElephants');

describe('6 - Cria uma função que retorna informações referentes aos elefantes', () => {
  it('ao passar o argumento "count" retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('ao passar o argumento "names" retorna um array com a relação dos nomes dos elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('ao passar o argumento "averageAge" retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBeCloseTo(expected);
  });

  it('ao passar o argumento "location" retorna a localização dos elefantes', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });

  it('ao passar o argumento "popularity" retorna o valor da popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  it('ao passar o argumento "availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('ao não passar argumento retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });

  it('ao passar um argumento que não é uma string retorna "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants(100);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });

  it('ao passar um argumento que não é uma string retorna "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants('elefante');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
