import React, { useState } from 'react';
import Buttons from './buttons';
import buttonData from './buttonData';
import calculate from '../logics/calculate';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  
  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };

  const Button = buttonData
    .map((btn) => (
      <Buttons
        key={btn.id}
        val={btn.value}
      />
    ));
  return (
    <div className="calculator">
      <div className="screen">
        <span>{total}</span>
        <span>{operation}</span>
        <span>{next}</span>
      </div>
      <div className="buttons">
        {Button}
      </div>
    </div>
  );
};

export default Calculator;
