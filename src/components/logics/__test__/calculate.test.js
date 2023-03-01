import calculate from '../calculate';

describe('testing calculate logics', () => {
  const sum = {
    total: '3',
    next: '2',
    operation: '+',
  };

  const subtract = {
    total: '3',
    next: '2',
    operation: '-',
  };

  const multiply = {
    total: '3',
    next: null,
    operation: '-',
  };

  test('function should add correctly:"2 + 3 = 5"', () => {
    expect(calculate(sum, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
});
