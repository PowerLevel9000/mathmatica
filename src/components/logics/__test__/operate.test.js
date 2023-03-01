import operate from '../operate';

describe('testing oprations', () => {
  test('sum of 5 and 4 should be "9"', () => {
    expect(operate(5, 4, '+')).toBe('9');
  });
});
