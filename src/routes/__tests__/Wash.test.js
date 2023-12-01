import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Wash from '../Wash';

// Mock para o useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock para o arquivo supabase.js
jest.mock('../../config/supabase', () => ({
  from: () => ({
    select: async () => ({ data: [], error: null }),
  }),
}));

describe('Wash', () => {

  test('renders the main title', () => {
    render(
      <Router>
        <Wash />
      </Router>
    );
    expect(screen.getByText('Visualize os agendamentos !!')).toBeInTheDocument();
  });

});
