/* eslint-disable no-undef */
import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Wash, { columns } from '../Wash'
import supabase from '../../config/supabase';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

jest.mock('../../config/supabase', () => {
  return {
    __esModule: true,
    default: {
      createClient: jest.fn(),
    },
  }
})

describe('Wash', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('renders the main title', () => {
    act(() => {
      render(
        <Router>
          <Wash />
        </Router>
      )
    })
    expect(screen.getByText('Tabela de agendamentos !!')).toBeInTheDocument()
  })

  test('renders the table', () => {
    render(
      <Router>
        <Wash />
      </Router>
    )
    test('renders table data correctly', async () => {
      jest.mock('../../config/supabase', () => ({
        from: () => ({
          select: async () => ({
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
        }),
      }))
  
      render(
        <Router>
          <Wash />
        </Router>
      )
  
      const data = [
        '25/12/2023',
        '10:00',
        'CarModel',
        'ABC1234',
        'Car Wash',
        'John Doe',
        '(12) 3456789',
        'Paid',
      ]
      data.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument()
      })
    })

    const tableElement = screen.getByRole('table')
    expect(tableElement).toBeInTheDocument()

    columns.forEach((column) => {
      expect(screen.getByText(column.label)).toBeInTheDocument()
    })
  })


})
