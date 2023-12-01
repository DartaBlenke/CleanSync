import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Flow from '../Flow';

describe('Flow', () => {
  test('renders the main title', () => {
    act(() => {
      render(
        <Router>
          <Flow />
        </Router>
      );
    });
    expect(screen.getByText('Bem vindo aos serviços CleanSync')).toBeInTheDocument();
  });

  test('renders the subtitle', () => {
    act(() => {
      render(
        <Router>
          <Flow />
        </Router>
      );
    });
    expect(screen.getByText('Selecione o fluxo desejado')).toBeInTheDocument();
  });

  test('renders both buttons', () => {
    act(() => {
      render(
        <Router>
          <Flow />
        </Router>
      );
    });
    expect(screen.getByText('Lavação')).toBeInTheDocument();
    expect(screen.getByText('Cliente')).toBeInTheDocument();
  });
});
