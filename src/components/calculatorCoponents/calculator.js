import Buttons from './buttons';
import buttonData from './buttonData';

const Calculator = () => {
  const Button = buttonData
    .map((btn) => (
      <Buttons
        key={btn.id}
        val={btn.value}
      />
    ));
  return (
    <div className="calculator">
      <div className="screen"><span>0</span></div>
      <div className="buttons">
        {Button}
      </div>
    </div>
  );
};

export default Calculator;
