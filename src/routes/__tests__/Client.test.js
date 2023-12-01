import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Client from '../Client';

// Mock para o useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Client', () => {
  beforeAll(() => {
    // Simulando um valor para localStorage.getItem('vehicles') antes dos testes
    const mockVehicles = JSON.stringify([{ id: 1, name: 'Carro 1' }, { id: 2, name: 'Carro 2' }]);
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn().mockReturnValue(mockVehicles),
      },
      configurable: true,
      writable: true,
    });
  });

  test('renders the main title', () => {
    render(
      <Router>
        <Client />
      </Router>
    );
    expect(screen.getByText('Bem vindo ao nosso serviço de agendamento!!')).toBeInTheDocument();
  });

  test('renders the subtitle', () => {
    render(
      <Router>
        <Client />
      </Router>
    );
    expect(screen.getByText('Por favor, informe qual o tipo do seu automóvel.')).toBeInTheDocument();
  });
});
