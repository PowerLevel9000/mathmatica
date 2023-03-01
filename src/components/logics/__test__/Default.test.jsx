import { render, screen } from '@testing-library/react';
import Home from '../../Home';

describe('home rendering testing by different methods', () => {
  test('heading :"get by text"', () => {
    render(<Home />);
    const linkElement = screen.getByText(/Wellcome To Our Page/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('heading :"get by role"', () => {
    render(<Home />);
    const linkElement = screen.getByRole('heading');
    expect(linkElement).toBeInTheDocument();
  });

  test('Paragraph :"get by title"', () => {
    render(<Home />);
    const linkElement = screen.getByTitle('wellcome quote');
    expect(linkElement).toBeInTheDocument();
  });

  test('Paragraph :"get by testid"', () => {
    render(<Home />);
    const linkElement = screen.getByTestId('qoute-2');
    expect(linkElement).toBeInTheDocument();
  });

  // find by methods used
  test('heading :"get by text"', async () => {
    render(<Home />);
    const linkElement = await screen.findByText(/Wellcome To Our Page/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('heading :"get by text"', () => {
    render(<Home />);
    const arrOfPara = screen.getAllByRole('paragraph');
    expect(arrOfPara.length).toBe(2);
  });

  // query by
  test('heading :"Querry by text"', () => {
    render(<Home />);
    const linkElement = screen.queryByText(/baby baby baby haoy/i);
    expect(linkElement).not.toBeInTheDocument();
  });
});
