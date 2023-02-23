import React, { useState } from 'react';
import calculate from './logics/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };
  return (
    <div className="calculator">
      <div className="screen">
        <input type="text" value={result.next || result.total || '0'} />
        <small>e</small>
      </div>
      <div className="buttons">

        <button className="button" type="button" onClick={() => handleClick('AC')}>AC</button>
        <button className="button" type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="button" type="button" onClick={() => handleClick('%')}>%</button>
        <button className="button" type="button" onClick={() => handleClick('÷')}>÷</button>

        <button className="button" type="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" type="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" type="button" onClick={() => handleClick('9')}>9</button>
        <button className="button" type="button" onClick={() => handleClick('x')}>x</button>

        <button className="button" type="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" type="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" type="button" onClick={() => handleClick('6')}>6</button>
        <button className="button" type="button" onClick={() => handleClick('-')}>-</button>

        <button className="button" type="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" type="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" type="button" onClick={() => handleClick('3')}>3</button>
        <button className="button" type="button" onClick={() => handleClick('+')}>+</button>

        <button className="button" type="button" onClick={() => handleClick('0')}>0</button>
        <button className="button" type="button" onClick={() => handleClick('.')}>.</button>
        <button className="button" type="button" onClick={() => handleClick('=')}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
