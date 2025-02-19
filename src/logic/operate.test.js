import operate from './operate';

describe('Add numbers', () => {
  test('add two negative numbers', () => {
    expect(operate(-1, -4, '+')).toBe('-5');
  });
  test('add positive and negative numbers', () => {
    expect(operate(1, -2, '+')).toBe('-1');
  });
  test('add float numbers', () => {
    expect(operate(0.61, -2.5, '+')).toBe('-1.89');
  });
});

describe('Subtract numbers', () => {
  it('subtract two negative numbers', () => {
    expect(operate(-1, -4, '-')).toBe('3');
  });
  test('subtract positive and negative numbers', () => {
    expect(operate(1, -3, '-')).toBe('4');
  });
  test('subtract float numbers', () => {
    expect(operate(4.2, -3.5, '-')).toBe('7.7');
  });
});

describe('Multiply numbers', () => {
  test('multiply two negative numbers', () => {
    expect(operate(-3, -6, 'x')).toBe('18');
  });
  test('multiply positive and negative numbers', () => {
    expect(operate(4, -7, 'x')).toBe('-28');
  });
  test('multiply float numbers', () => {
    expect(operate(4.3, -2.1, 'x')).toBe('-9.03');
  });
});

describe('Divide numbers', () => {
  test('divide two negative numbers', () => {
    expect(operate(-8, -4, '÷')).toBe('2');
  });
  test('divide positive and negative numbers', () => {
    expect(operate(10, -5, '÷')).toBe('-2');
  });
  test('divide by zero', () => {
    expect(operate(10, 0, '÷')).toBe('Can\'t divide by 0.');
  });
});

describe('modulo of numbers', () => {
  test('modulo two  numbers', () => {
    expect(operate(7, 4, '%')).toBe('3');
  });
  test('modulo by zero', () => {
    expect(operate(5, 0, '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

describe('unknown opeator', () => {
  test('use unknown opearator', () => {
    expect(() => operate(7, 4, '$')).toThrow(Error);
    expect(() => operate(7, 4, '$')).toThrow("Unknown operation '$'");
  });
});
