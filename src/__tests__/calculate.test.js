import calculate from '../logic/calculate.js';

describe('test calculate basic operations', () => {
  test('Operate = with 10 + 5 resulting on total 15', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const expectedResult = {
      total: '15',
      next: null,
      operation: null,
    };
    let result = 0;

    result = calculate(obj, buttonName);

    expect(result.total).toBe(expectedResult.total);
    expect(result.next).toBe(expectedResult.next);
    expect(result.operation).toBe(expectedResult.operation);
  });

  test('Operate AC clear all', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expectedResult = {
      total: null,
      next: null,
      operation: null,
    };
    let result = 0;

    result = calculate(obj, buttonName);

    expect(result.total).toBe(expectedResult.total);
    expect(result.next).toBe(expectedResult.next);
    expect(result.operation).toBe(expectedResult.operation);
  });

  test('Operate two number', () => {
    const obj = {
      total: '10',
      next: null,
      operation: '+',
    };
    const buttonName = '8';
    const expectedResult = {
      total: '10',
      next: '8',
      operation: '+',
    };
    let result = 0;

    result = calculate(obj, buttonName);

    expect(result.total).toBe(expectedResult.total);
    expect(result.next).toBe(expectedResult.next);
    expect(result.operation).toBe(expectedResult.operation);
  });  
});
