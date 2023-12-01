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

export const columns = [
  { id: 'selectedDate', label: 'Data - mês/dia/ano', minWidth: 40 },
  { id: 'selectedHour', label: 'Horário', minWidth: 40 },
  { id: 'model', label: 'Modelo', minWidth: 40 },
  { id: 'plate', label: 'Placa', minWidth: 40 },
  { id: 'labelService', label: 'Serviço', minWidth: 40 },
  { id: 'name', label: 'Nome', minWidth: 40 },
  { id: 'phone', label: 'Telefone', minWidth: 40 },
  { id: 'paymentLabel', label: 'Pagamento', minWidth: 40 },
]

function createData(selectedDate, selectedHour, model, plate, labelService, name, phone, paymentLabel) {
  return {
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

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const tableData = schedule
    ? schedule
        .map((item) => {
          const [year, month, day] = item.selectedDate.split('-')
          const formattedDate = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`

          const formattedHour = item.selectedHour.toString().padStart(2, '0') + ':00'

          return createData(
            formattedDate,
            formattedHour,
            item.model,
            item.plate,
            item.labelService,
            item.name,
            item.phone,
            item.paymentLabel
          )
        })
        .sort((a, b) => {
          const dateA = new Date(a.selectedDate).getTime()
          const dateB = new Date(b.selectedDate).getTime()
          if (dateA !== dateB) {
            return dateA - dateB
          } else {
            return parseInt(a.selectedHour) - parseInt(b.selectedHour)
          }
        })
    : []

  return (
    <div className='mt-[30px] w-full h-auto mx-auto flex flex-col items-center md:mt-[100px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6 pb-10'>Visualize os agendamentos !!</h1>
      <h1 className='text-2xl text-red-600'>{fetchError}</h1>
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
                            {column.format && typeof value === 'number' ? column.format(value) : value}
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
