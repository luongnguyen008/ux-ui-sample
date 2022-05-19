import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Tổng</Title>
      <Typography component="p" variant="h4">
        12.400.000 vnđ
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        ngày 10 tháng 1 năm 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Xem chi tiết
        </Link>
      </div>
    </React.Fragment>
  );
}
