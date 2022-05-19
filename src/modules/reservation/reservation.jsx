import React, { useState, useEffect } from 'react';
import { withSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Loading from '../../common-components/Loading';
import useStyles from "./reservation.styles";
import ReservationService from '../../services/reservation/reservation';
import DialogDetailReservation from './DialogDetailReservation/DialogDetailReservation';
import ModalAddNewReservation from './modalAddNewReservation/modalAddNewReservation'
import Grid from '@mui/material/Grid';
import { TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Reservation(props) {
    const classes = useStyles();
    const [reservations, setReServations] = useState([
        {
            id: 1,
            nameCustomer: "Nguyen văn A",
            phoneCustomer: "0982382321",
            numberRoom: 1,
            fromDate: "10-01-2022",
            toDate: "15-01-2022",
            status: "x",
        },
        {
            id: 2,
            nameCustomer: "Nguyen văn B",
            phoneCustomer: "0982382321",
            numberRoom: 2,
            fromDate: "10-01-2022",
            toDate: "15-01-2022",
            status: "x",
        },
        {
            id: 3,
            nameCustomer: "Nguyen văn C",
            phoneCustomer: "0982382321",
            numberRoom: 3,
            fromDate: "10-01-2022",
            toDate: "15-01-2022",
            status: "x",
        },
        {
            id: 4,
            nameCustomer: "Nguyen văn D",
            phoneCustomer: "0982382321",
            numberRoom: 2,
            fromDate: "10-01-2022",
            toDate: "15-01-2022",
            status: "x",
        },
        {
            id: 5,
            nameCustomer: "Nguyen văn E",
            phoneCustomer: "0982382321",
            numberRoom: 3,
            fromDate: "10-01-2022",
            toDate: "15-01-2022",
            status: "x",
        },
    ])
    const [filters, setFilters] = useState({
        keyword: ""
    });
    const [showDetailReservation, setShowDetailReservation] = useState(false);
    const [showAddNewReservation, setShowAddNewReservation] = useState(false);
    const [reservationChoose, setReservationChoose] = useState({
        id: 0,
        nameCustomer: "",
        phoneCustomer: "",
        numberRoom: 0,
        fromDate: "",
        toDate: "",
        status: "",
    });
    useEffect(() => {
        try {
            ReservationService.getListReservationByParam(filters).then((res) => {
                console.log(res.data)
                setReServations(
                    res.data.map((reservation) => {
                        return {
                            id: reservation.id,
                            nameCustomer: reservation.reservationGuestDTO.nameCustomer,
                            phoneCustomer: reservation.reservationGuestDTO.phoneCustomer,
                            numberRoom: reservation.numberRoom,
                            fromDate: reservation.fromDate,
                            toDate: reservation.toDate,
                            status: reservation.status,
                        }
                    })
                )
            })
        } catch (error) {

        }
    }, [filters])


    const columns = [
        {
            field: " ",
            width: 50,
            sortable: false,
            filterable: false,
            disableClickEventBubbling: true,
            headerAlign: 'center',
            align: "center",
            renderCell: (cellValues) => {
                return (
                    <IconButton
                        style={{ alignContent: "center" }}
                        size="small"
                        onClick={(event) => {
                            handleClick(event, cellValues);
                        }}
                    >
                        <EditIcon style={{ fill: "orange" }} />
                    </IconButton>
                );
            }
        },
        { field: 'nameCustomer', headerName: 'Tên khách', type: 'text', width: 180, headerAlign: 'center', align: "center", },
        {
            field: 'phoneCustomer',
            headerName: 'Số điện thoại',
            headerAlign: 'center',
            type: 'text',
            minWidth: 150,
            align: "center",
        },
        {
            field: 'numberRoom',
            headerName: 'Số phòng',
            headerAlign: 'center',
            type: 'text',
            minWidth: 160,
            align: "center",
        },
        {
            field: 'fromDate',
            headerName: 'Ngày đến',
            headerAlign: 'center',
            type: 'text',
            minWidth: 220,
            align: "center",
        },
        {
            field: 'toDate',
            headerName: 'Ngày đi',
            headerAlign: 'center',
            type: 'text',
            minWidth: 220,
            align: "center",
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            headerAlign: 'center',
            type: 'text',
            minWidth: 160,
            align: "center",
        }
    ];
    const handleClick = (event, cellValues) => {
        console.log(cellValues);
    };

    const handleCellClick = (params) => {
        setShowDetailReservation(true);
        setReservationChoose(params.row)
    };

    const handleRowClick = (param, event) => {
        console.log("show")
        event.stopPropagation();
    };
    const openDetailReservation = () => {
        setShowDetailReservation(false)
    }
    const openAddNewReservation = () => {
        setShowAddNewReservation(false);
    }
    const showModalAddNew = () => {
        setShowAddNewReservation(true);
    }
    return (
        <React.Fragment>
            <Typography mb={2} fontSize={25} sx={{ fontWeight: 'bold', color: "#1769aa" }}>Quản lí đặt phòng</Typography>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                direction="row"
                mb={4}
            >
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                name="dob"
                                type="date"
                                id="dob"
                                label="Ngày đến"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                name="dob"
                                type="date"
                                id="dob"
                                label="Ngày dự kiến đi"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                id="username"
                                label="Tên khách hàng"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                margin="normal"
                                id="username"
                                label="Số điện thoại"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid alignSelf="center" item xs={4}>
                        <Button size='large' variant="contained" color="primary" startIcon={<FilterAltIcon />}>Lọc</Button>
                    </Grid>
                </Grid>
            </Grid>
            <React.Fragment>
                <Button sx={{ mb: 3 }} variant="contained" className={classes.buttonAdd} onClick={showModalAddNew}>
                    Thêm mới đặt phòng
                </Button>
                <Box>
                    <DialogDetailReservation open={showDetailReservation} reservationChoose={reservationChoose} handleClose={openDetailReservation} />
                </Box>
                <Box>
                    <ModalAddNewReservation open={showAddNewReservation} handleClose={openAddNewReservation} />
                </Box>
                <DataGrid
                    autoHeight
                    rows={reservations}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onCellClick={(param) => handleCellClick(param)}
                    onRowClick={handleRowClick}
                />
            </React.Fragment>

        </React.Fragment>

    );
}

export default Reservation;