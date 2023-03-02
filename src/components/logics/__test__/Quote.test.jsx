import { screen, render } from '@testing-library/react';
import Quote from '../../Quote';

describe('Quote is important ??', () => {
  test('wraper should be render', () => {
    render(<Quote />);
    const wraper = screen.getByRole('separator');
    expect(wraper).toBeInTheDocument();
  });

  test('Heading should be render', () => {
    render(<Quote />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('Span should be render', () => {
    render(<Quote />);
    const span = screen.getByRole('note');
    expect(span).toBeInTheDocument();
  });
});
