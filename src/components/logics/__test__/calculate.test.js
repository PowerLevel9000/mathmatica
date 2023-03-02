import calculate from '../calculate';

describe('testing calculate logics', () => {
  test('function should add correctly: "2 + 3 = 5"', () => {
    const sum = {
      total: '3',
      next: '2',
      operation: '+',
    };
    expect(calculate(sum, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  test('function should subtract correctly: "3 - 2 = 1"', () => {
    const subtract = {
      total: '3',
      next: '2',
      operation: '-',
    };
    expect(calculate(subtract, '=')).toEqual({
      total: '1',
      next: null,
      operation: null,
    });
  });

  test('function should multiply correctly: "3 x 2 = 6"', () => {
    const multiply = {
      total: '3',
      next: '2',
      operation: 'x',
    };
    expect(calculate(multiply, '=')).toEqual({
      total: '6',
      next: null,
      operation: null,
    });
  });

  test('function should divide correctly: "6 / 3 = 2"', () => {
    const divide = {
      total: '6',
      next: '3',
      operation: '÷',
    };
    expect(calculate(divide, '=')).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });
});
