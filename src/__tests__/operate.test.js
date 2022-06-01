import operate from '../logic/operate.js';

describe("Sum testing", () => {
  test("5 + 8 = 13", () => {
    const a = 5;
    const b = 8;
    const operation = '+';
    const expected_result = '13';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("-10 + 5 = -5", () => {
    const a = -10;
    const b = 5;
    const operation = '+';
    const expected_result = '-5';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });
});

describe("Substract testing", () => {
  test("5 - 8 = -3", () => {
    const a = 5;
    const b = 8;
    const operation = '-';
    const expected_result = '-3';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("10 - 5 = 5", () => {
    const a = 10;
    const b = 5;
    const operation = '-';
    const expected_result = '5';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });
});

describe("Multipply testing", () => {
  test("5 x 8 = 40", () => {
    const a = 5;
    const b = 8;
    const operation = 'x';
    const expected_result = '40';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("10 x 0 = 0", () => {
    const a = 10;
    const b = 0;
    const operation = 'x';
    const expected_result = '0';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });
});

describe("divide testing", () => {
  test("5 ÷ 8 = 0.625", () => {
    const a = 5;
    const b = 8;
    const operation = '÷';
    const expected_result = '0.625';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("10 ÷ 5 = 5", () => {
    const a = 10;
    const b = 5;
    const operation = '÷';
    const expected_result = '2';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("10 ÷ 0 = error", () => {
    const a = 10;
    const b = 0;
    const operation = '÷';
    const expected_result = "Can't divide by 0.";
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });
});

describe("Module testing", () => {
  test("5 % 0 = return error(can't divide by 0)", () => {
    const a = 5;
    const b = 0;
    const operation = '%';
    const expected_result = "Can't find modulo as can't divide by 0.";
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });

  test("10 % 5 = 0", () => {
    const a = 10;
    const b = 5;
    const operation = '%';
    const expected_result = '0';
    let result = 0;
    
    result = operate(a, b, operation);

    expect(result).toBe(expected_result);
  });
});