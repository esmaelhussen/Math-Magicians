import calculate from './calculate';

describe('calcualte function', () => {
  const init = {
    total: null,
    next: null,
    operation: null,
  };

  test('multiplication', () => {
    let score = calculate(init, '2');
    score = calculate(score, '6');
    score = calculate(score, '4');
    score = calculate(score, 'x');
    score = calculate(score, '2');
    score = calculate(score, '0');
    score = calculate(score, '=');

    expect(score.total).toEqual('5280');
  });

  test('division', () => {
    let score = calculate(init, '4');
    score = calculate(score, '4');
    score = calculate(score, '÷');
    score = calculate(score, '2');
    score = calculate(score, '1');
    score = calculate(score, '=');

    expect(score.total).toEqual('2.0952380952380952381');
  });

  test('unknown operator', () => {
    let score = calculate(init, '4');
    score = calculate(init, '/');

    expect(() => calculate(score, score.total)).toThrow(Error);
  });

  test('modulo by zero', () => {
    let score = calculate(init, '4');
    score = calculate(score, '%');
    score = calculate(score, '0');
    score = calculate(score, '=');

    expect(score.total).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
