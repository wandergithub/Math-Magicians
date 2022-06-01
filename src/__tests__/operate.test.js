import operate from '../logic/operate';

describe('Sum testing', () => {
  test('5 + 8 = 13', () => {
    const a = 5;
    const b = 8;
    const operation = '+';
    const expectedResult = '13';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('-10 + 5 = -5', () => {
    const a = -10;
    const b = 5;
    const operation = '+';
    const expectedResult = '-5';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });
});

describe('Substract testing', () => {
  test('5 - 8 = -3', () => {
    const a = 5;
    const b = 8;
    const operation = '-';
    const expectedResult = '-3';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('10 - 5 = 5', () => {
    const a = 10;
    const b = 5;
    const operation = '-';
    const expectedResult = '5';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });
});

describe('Multipply testing', () => {
  test('5 x 8 = 40', () => {
    const a = 5;
    const b = 8;
    const operation = 'x';
    const expectedResult = '40';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('10 x 0 = 0', () => {
    const a = 10;
    const b = 0;
    const operation = 'x';
    const expectedResult = '0';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });
});

describe('divide testing', () => {
  test('5 ÷ 8 = 0.625', () => {
    const a = 5;
    const b = 8;
    const operation = '÷';
    const expectedResult = '0.625';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('10 ÷ 5 = 5', () => {
    const a = 10;
    const b = 5;
    const operation = '÷';
    const expectedResult = '2';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('10 ÷ 0 = error', () => {
    const a = 10;
    const b = 0;
    const operation = '÷';
    const expectedResult = "Can't divide by 0.";
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });
});

describe('Module testing', () => {
  test("5 % 0 = return error(can't divide by 0)", () => {
    const a = 5;
    const b = 0;
    const operation = '%';
    const expectedResult = "Can't find modulo as can't divide by 0.";
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });

  test('10 % 5 = 0', () => {
    const a = 10;
    const b = 5;
    const operation = '%';
    const expectedResult = '0';
    let result = 0;

    result = operate(a, b, operation);

    expect(result).toBe(expectedResult);
  });
});
