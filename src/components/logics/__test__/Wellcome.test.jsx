import { render, screen } from '@testing-library/react';
import WellcomeCalc from '../../WellcomeCalc';

describe('calculator text card should be there', () => {
  test('heading should be there', () => {
    render(<WellcomeCalc />);
    const calcHeadding = screen.getByRole('heading');
    expect(calcHeadding).toBeInTheDocument();
  });

  test('heading should be there', () => {
    render(<WellcomeCalc />);
    const calcPara = screen.getByText('Start with some basics calculations');
    expect(calcPara).toBeInTheDocument();
  });

  test('heading should be there', () => {
    render(<WellcomeCalc />);
    const calcPara = screen.getByText('How about 2 + 2 ?');
    expect(calcPara).toBeInTheDocument();
  });
});
