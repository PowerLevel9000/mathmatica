import { render, screen } from '@testing-library/react';
import Calculator from '../../Calculator';

describe('reandering the calculator', () => {
  test('is calculator is rendering', () => {
    render(<Calculator />);
    const calculatorContainer = screen.getByTestId('Calculator-wrapper');
    expect(calculatorContainer).toBeInTheDocument();
  });
  //  since we are using input as a screen so we can acctually ignore the warning "read only"
  test('number of buttons in calculator should be 19', () => {
    render(<Calculator />);
    const buttonArr = screen.getAllByRole('button');
    expect(buttonArr.length).toBe(19);
  });

  test('screen of the calculator should be visible', () => {
    render(<Calculator />);
    const screenClac = screen.getByRole('banner');
    expect(screenClac).toBeInTheDocument();
  });

  test('welcome qoute of the calculator should be visible', () => {
    render(<Calculator />);
    const welcomeQuote = screen.getByRole('separator');
    expect(welcomeQuote).toBeInTheDocument();
  });
});
