import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '10 Jan, 2022',
    'Nguyen Văn A',
    '101',
    'Tiền mặt',
    '1.500.000',
  ),
  createData(
    1,
    '10 Jan, 2022',
    'Nguyen Thi B',
    '205',
    'VISA ⠀•••• 2574',
    '2.200.000',
  ),
  createData(2, '10 Jan, 2022', 'Tom Cruise', '404', 'MC ⠀•••• 1253', '2.000.000'),
  createData(
    3,
    '10 Jan, 2022',
    'Tran Thi C',
    '104',
    'Tiền mặt',
    '1.400.000',
  ),
  createData(
    4,
    '10 Jan, 2022',
    'Nguyen Vu D',
    '304',
    'VISA ⠀•••• 5919',
    '1.200.000',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Các phòng vừa thanh toán</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày ra</TableCell>
            <TableCell>Tên khách</TableCell>
            <TableCell>Phòng</TableCell>
            <TableCell>Thanh toán</TableCell>
            <TableCell align="right">Số tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`${row.amount} vnđ`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Xem thêm
      </Link>
    </React.Fragment>
  );
}
