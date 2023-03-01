import operate from '../operate';

describe('operate function', () => {
  it('should add two numbers correctly', () => {
    const result = operate('4', '5', '+');
    expect(result).toEqual('9');
  });

  it('should subtract two numbers correctly', () => {
    const result = operate('4', '5', '-');
    expect(result).toEqual('-1');
  });

  it('should multiply two numbers correctly', () => {
    const result = operate('4', '5', 'x');
    expect(result).toEqual('20');
  });

  it('should divide two numbers correctly', () => {
    const result = operate('10', '5', '÷');
    expect(result).toEqual('2');
  });

  it("should handle division by 0 and return 'Can't divide by 0.'", () => {
    const result = operate('10', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should return the modulo of two numbers correctly', () => {
    const result = operate('10', '3', '%');
    expect(result).toEqual('1');
  });

  it("should handle modulo when dividing by 0 and return 'Can't find modulo as can't divide by 0.'", () => {
    const result = operate('10', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for an unknown operation', () => {
    expect(() => operate('4', '5', '&')).toThrowError("Unknown operation '&'");
  });
});
