import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import supabase from '../config/supabase'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const columns = [
  { id: 'selectedDate', label: 'Data', minWidth: 40 },
  { id: 'selectedHour', label: 'Horário', minWidth: 40 },
  { id: 'model', label: 'Modelo', minWidth: 40 },
  { id: 'plate', label: 'Placa', minWidth: 40 },
  { id: 'labelService', label: 'Serviço', minWidth: 40 },
  { id: 'name', label: 'Nome', minWidth: 40 },
  { id: 'phone', label: 'Telefone', minWidth: 40 },
  { id: 'paymentLabel', label: 'Pagamento', minWidth: 40 },
  { id: 'delete', label: 'Excluir', minWidth: 40 },
]

function createData(selectedDate, selectedHour, model, plate, labelService, name, phone, paymentLabel, id) {
  return {
    id,
    selectedDate,
    selectedHour,
    model,
    plate: plate.toUpperCase(),
    labelService,
    name,
    phone: `(${phone.slice(0, 2)}) ${phone.slice(2)}`,
    paymentLabel,
  }
}

export default function Wash() {
  const [fetchError, setFetchError] = useState(null)
  const [schedule, setSchedule] = useState(null)
  const [selectedRows, setSelectedRows] = useState([])
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  useEffect(() => {
    const fetchSchedule = async () => {
      const { data, error } = await supabase.from('schedule').select()

      if (error) {
        setFetchError('Agendamentos não encontrados')
        setSchedule(null)
      }
      if (data) {
        setSchedule(data)
        setFetchError(null)
      }
    }
    fetchSchedule()
  }, [])

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDeleteClick = (row) => {
    const selectedIndex = selectedRows.findIndex((selectedRow) => selectedRow.id === row.id)
    let newSelectedRows = []

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, row]
    } else if (selectedIndex >= 0) {
      newSelectedRows = selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
    }

    setSelectedRows(newSelectedRows)
    setConfirmDelete(newSelectedRows.length > 0)
  }

  const handleCancelDelete = () => {
    setSelectedRows([])
    setConfirmDelete(false)
  }

  const handleConfirmDelete = async () => {
    if (selectedRows.length > 0) {
      const idsToDelete = selectedRows.map((row) => row.id)

      try {
        const { error } = await supabase.from('schedule').delete().in('id', idsToDelete)

        if (!error) {
          const { data, error } = await supabase.from('schedule').select()

          if (error) {
            setFetchError('Agendamentos não encontrados')
            setSchedule(null)
          }
          if (data) {
            setSchedule(data)
            setFetchError(null)
            notify()
          }
        }
      } catch (error) {
        console.error('Erro ao excluir:', error.message)
      }
    }

    setSelectedRows([])
    setConfirmDelete(false)
  }

  const tableData = schedule
    ? schedule.map((item) =>
        createData(
          item.selectedDate,
          item.selectedHour,
          item.model,
          item.plate,
          item.labelService,
          item.name,
          item.phone,
          item.paymentLabel,
          item.id
        )
      )
    : []

    const notify = () => toast.success('Agendamento excluído com sucesso!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })

  return (
    <div className='mt-[30px] w-full h-auto mx-auto flex flex-col items-center md:mt-[100px]'>
      <ToastContainer/>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6 pb-10'>Tabela de agendamentos !!</h1>
      <h1 className='text-2xl text-red-600'>{fetchError}</h1>
      {confirmDelete && (
        <div style={{ position: 'center', top: '20px', right: '20px', botton: '20px'}}>
          <button className='w-20 md:w-40 h-10 bg-gray-400 rounded-lg border-2' onClick={handleCancelDelete}>
            Cancelar
          </button>
          <button className='w-20 md:w-40 h-10 bg-green-600 rounded-lg border-2 ml-2' onClick={handleConfirmDelete}>
            Excluir
          </button>
        </div>
      )}
      <Paper sx={{ width: '80%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 4040 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id]

                        return (
                          <TableCell key={column.id} align="center">
                            {column.id === 'delete' ? (
                              <button
                                className='w-20 h-10 bg-red-600 rounded-lg border-2'
                                onClick={() => handleDeleteClick(row)}
                              >
                                Excluir
                              </button>
                            ) : (
                              column.format && typeof value === 'number' ? column.format(value) : value
                            )}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
