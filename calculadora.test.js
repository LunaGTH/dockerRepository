const { sumar } = require('./calculadora');

test('suma 2 + 3 = 5', () => {
    expect(sumar(2, 3)).toBe(5);
});