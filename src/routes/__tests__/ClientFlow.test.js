import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ClientFlow from '../ClientFlow';

jest.mock('react-date-picker/dist/DatePicker.css', () => ({}));
jest.mock('react-calendar/dist/Calendar.css', () => ({}));
jest.mock('../../styles/disableStyles.css', () => ({}));

jest.mock('../../assets/img/pix.svg', () => 'Pix');
jest.mock('../../assets/img/cash.svg', () => 'Cash');
jest.mock('../../assets/img/card.svg', () => 'Card');
jest.mock('../../assets/img/phone.svg', () => 'Phone');
jest.mock('../../assets/img/user.svg', () => 'User');
jest.mock('../../assets/img/service.svg', () => 'Service');
jest.mock('../../assets/img/wallet.svg', () => 'Wallet');
jest.mock('../../assets/img/calendar.svg', () => 'Date');

jest.mock('../../config/supabase', () => ({
  from: () => ({
    insert: async () => ({ data: {}, error: null }) 
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ item: 'seu_item_de_teste_aqui' }),
}))

jest.mock('react-toastify/dist/ReactToastify.css', () => ({}))

describe('ClientFlow', () => {
  const mockVehicles = {
    seu_item_de_teste_aqui: {
      prices: [10, 20, 30], 
    },
  }

  const localStorageMock = {
    getItem: jest.fn().mockReturnValue(JSON.stringify(mockVehicles)),
  }
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  })

  test('renders the main title', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Bem vindo ao nosso serviço de agendamento!!')).toBeInTheDocument()
  })

  test('renders the subtitle - pessoa', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Informe seus dados pessoais.')).toBeInTheDocument()
  })

  test('renders the subtitle - veiculo', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Informe os dados do veículo.')).toBeInTheDocument()
  })

  test('renders the subtitle - servico', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Selecione os serviços desejados.')).toBeInTheDocument()
  })

  test('renders the subtitle - data', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Selecione a data e hora do serviço.')).toBeInTheDocument()
  })

  test('renders the subtitle - pagamento', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Selecione a forma de pagamento.')).toBeInTheDocument()
  })

  test('renders the subtitle - finais', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })
    expect(screen.getByText('Informações finais.')).toBeInTheDocument()
  })

  test('renders the Agendar button', () => {
    act(() => {
      render(
        <Router>
          <ClientFlow />
        </Router>
      )
    })

    const agendarButton = screen.getByRole('button', { name: 'Agendar' })
    expect(agendarButton).toBeInTheDocument()
  })


})
