import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from '../Error';

describe('ErrorPage Component', () => {
  test('renders Error 404 text', () => {
    render(<Error />);
    const error404Text = screen.getByText('Error 404!');
    expect(error404Text).toBeInTheDocument();
  });

  test('renders "Página não encontrada" text', () => {
    render(<Error />);
    const notFoundText = screen.getByText('Página não encontrada');
    expect(notFoundText).toBeInTheDocument();
  });

  test('renders "Volte para a tela principal" text', () => {
    render(<Error />);
    const backToMainText = screen.getByText('Volte para a tela principal');
    expect(backToMainText).toBeInTheDocument();
  });
});
