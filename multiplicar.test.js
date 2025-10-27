const { multiplicar } = require('./multiplicar');

describe('Função multiplicar', () => {
  test('multiplica 3 por 4', () => {
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('multiplica 5 por zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
  });

  test('multiplica 2 por 6', () => {
    expect(multiplicar(2, 6)).toBe(12);
  });

  test('multiplica 3 por 7', () => {
    expect(multiplicar(3, 7)).toBe(21);
  });
});
