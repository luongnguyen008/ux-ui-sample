import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import FeedIcon from '@mui/icons-material/Feed';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'value', label: 'ISO\u00a0Code', minWidth: 100 },
];

function createData(name, value) {
    return { name, value };
}

const rows = [
    createData('Phòng có khách', '9',),
    createData('Phòng dự kiến đi', '2'),
    createData('Phòng ở qua ngày', '2'),
    createData('Phòng dự kiến đến', '3'),
    createData('Tổng số phòng sẵn sàng', '21'),
    createData('Dự kiến phòng chiếm dụng', '5'),
    createData('Công suất dự kiến', '42.86'),
];
const rows1 = [
    createData('Khách đang ở', '0/23/23',),
    createData('Khách dự kiến đi', '0/2/2'),
    createData('Khách ở qua ngày', '0/3/3'),
    createData('Dự kiến đến', '0/3/3'),
    createData('Tổng khách dự kiến', '0/26/26'),
];
const rows2 = [
    createData('Đã đến', '0',),
    createData('Dự kiến đi', '3'),
    createData('Đã đi', '0'),
    createData('Dự kiến đi', '2'),
    createData('Đến và đi trong ngày', '0'),
];


export default function StatsTable() {
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
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ height: 460 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <DashboardIcon fontSize='large' style={{ paddingRight: "5px", fill: "#1769aa" }} />
                                            <span style={{ fontSize: "16px", paddingRight: "5px", fontWeight: "bold", color: "#1769aa" }} >
                                                Thống kê hôm nay
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ height: 460 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <GroupIcon fontSize='large' style={{ paddingRight: "5px", fill: "#1769aa" }} />
                                            <span style={{ fontSize: "16px", paddingRight: "5px", fontWeight: "bold", color: "#1769aa" }} >
                                                Tổng số khách
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows1
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ height: 460 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <FeedIcon fontSize='large' style={{ paddingRight: "5px", fill: "#1769aa" }} />
                                            <span style={{ fontSize: "16px", paddingRight: "5px", fontWeight: "bold", color: "#1769aa" }} >
                                                Hoạt động trong ngày
                                            </span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows2
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
                </Paper>
            </Grid>
        </Grid>

    );
}