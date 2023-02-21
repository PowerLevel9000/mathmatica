import Buttons from './buttons';
import buttonData from './buttonData';

const Calculator = () => {
  const Button = buttonData
    .map((btn) => (
      <Buttons
        key={btn.id}
        val={btn.value}
        // type={btn.type}
      />
    ));
  return (
    <div className="calculator">
      {Button}
    </div>
  );
};

export default Calculator;
