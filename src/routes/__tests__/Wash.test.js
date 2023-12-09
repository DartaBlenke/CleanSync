/* eslint-disable no-undef */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wash from '../Wash';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../config/supabase', () => ({
  __esModule: true,
  default: {
    createClient: jest.fn(),
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({
      data: [
        {
          selectedDate: '2023-12-25',
          selectedHour: '10',
          model: 'CarModel',
          plate: 'ABC1234',
          labelService: 'Car Wash',
          name: 'John Doe',
          phone: '123456789',
          paymentLabel: 'Paid',
        },
      ],
      error: null,
    }),
  },
}));

describe('Wash', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('renders the main title', async () => {
    await act(async () => {
      render(
        <Router>
          <Wash />
        </Router>
      );
    });
    expect(screen.getByText('Tabela de agendamentos !!')).toBeInTheDocument();
  });

  test('renders the table', async () => {
    await act(async () => {
      render(
        <Router>
          <Wash />
        </Router>
      );
    });

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
});
