const getOpeningHours = require('../src/getOpeningHours');

describe('12 - Testes da função getOpeningHours', () => {
  it('ao não passar argumento retorna o objeto contendo horários da semana', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toBe(expected);
  });

  it('ao passar os argumentos "Monday" e 09:00-AM retorna "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('ao passar os argumentos "Tuesday" e 09:00-AM retorna "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });

  it('ao passar os argumentos "Wednesday" e 09:00-AM retorna "The zoo is closed"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });

  it('ao passar os argumentos "Wednesday" e "Weekend" retorna "The zoo is closed"', () => {
    const actual = getOpeningHours('Tuesday', 'Weekend');
    const expected = 'The Weekend should represent a number';
    expect(actual).toBe(expected);
  });

  it('ao passar argumentos que sejam abreviações diferentes de "AM" ou "PM" retorna The abbreviation must be AM or PM', () => {
    const actual = getOpeningHours('Tuesday', '00:00-AA');
    const expected = 'The abbreviation must be AM or PM';
    expect(actual).toBe(expected);
  });

  it('ao passar argumentos que não sejam dias da semana retorna dayError', () => {
    const actual = getOpeningHours('Weekend', '10:00-AM');
    const expected = 'dayError';
    expect(actual).toBe(expected);
  });

  it('ao passar argumentos que não sejam horários válidos retorna o erro', () => {
    const actual = getOpeningHours('Monday', '30:00-AM');
    const expected = 'The hour must be between 0 and 12';
    expect(actual).toBe(expected);
  });

  it('ao passar argumentos que não sejam minutos válidos retorna o erro', () => {
    const actual = getOpeningHours('Monday', '10:90-AM');
    const expected = 'The minutes must be between 0 and 59';
    expect(actual).toBe(expected);
  });
});
