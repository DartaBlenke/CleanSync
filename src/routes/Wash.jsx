import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'time', label: 'Horário', minWidth: 40 },
  { id: 'car_model', label: 'Modelo', minWidth: 40 },
  { id: 'plate', label: 'Placa', minWidth: 40 },
  { id: 'service', label: 'Serviço', minWidth: 40 },
  { id: 'client_name', label: 'Nome', minWidth: 40 },
  { id: 'phone', label: 'Telefone', minWidth: 40 },
  { id: 'payment_method', label: 'Pagamento', minWidth: 40 },
];

function createData(time, car_model, plate, service, client_name, phone, payment_method) {
  return { time, car_model, plate, service, client_name, phone, payment_method }
}

const rows = [
  createData('08:00', 'Uno','BRA2E19', 'Lavação', 'Guilherme', '47 999999999', 'Cartão'),
  createData('09:00', 'Sandero','BRA2E19', 'Lavação - Cera', 'João', '47 999999999', 'Pix'),
  createData('10:00', 'Gol','BRA2E19', 'Lavação', 'Eduardo', '47 999999999', 'Cartão'),
  createData('11:00', 'Onix','BRA2E19', 'Lavação', 'Pedro', '47 999999999', 'Cartão'),
  createData('12:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('13:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('14:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('15:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('16:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('17:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
  createData('18:00', 'Lancer','BRA2E19', 'Lavação', 'Caio', '47 999999999', 'Pix'),
];

export default function Client() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='mt-[30px] w-full h-auto mx-auto flex flex-col items-center md:mt-[100px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6 pb-10'>Visualize os agendamentos !!</h1>
      <Paper sx={{ width: '80%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 4040 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.time}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
