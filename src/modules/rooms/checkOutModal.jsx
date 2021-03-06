import React, { useState } from 'react';
import { Dialog, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import ModalAddGuestInfo from './modalAddGuestInfo'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { services } from '../../utils/constants';
import * as dayjs from 'dayjs'
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from "react-redux";
import { useCheckOut } from '../../services/rooms/room.service';

function CheckOutModal(props) {
    const { open, room } = props;
    const guestList = useSelector((state) => state.guestReducer.guestList);
    const { checkOut } = useCheckOut()
    const [selectedRows, setSelectedRows] = useState([]);
    const [state, setState] = useState({
        guests: [],
        isOpenModalAddGuest: false,
        servicesUsed: [],
        serviceTotal: 0,
    })

    const { isOpenModalAddGuest, guests, servicesUsed, serviceTotal } = state
    const columns = [
        {
            field: " ",
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
        {
            field: 'name',
            headerName: 'H??? V?? T??n',
            width: 200,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
                }`,
        },
        {
            field: 'birthday',
            headerName: 'Ng??y sinh',
            headerAlign: 'center',
            type: 'date',
            width: 200,
            // valueGetter: (params) => dayjs(params.getValue(params.id, 'birthday')).format("DD-MM-YYYY")
        },
    ];
    console.log(dayjs(1604118294906).format("DD-MM-YYYY"))
    const servicesColumn = [
        {
            flex: 1,
            field: " ",
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
                            handleAddItem(event, cellValues);
                        }}
                    >
                        <ControlPointIcon style={{ fill: "#1769aa" }} />
                    </IconButton>
                );
            }
        },
        {
            field: 'name', headerName: 'D???ch v???', width: 150, flex: 1, sortable: false,
            filterable: false,
        },
        {
            field: 'price', headerName: 'Gi?? ti???n', width: 130, sortable: false,
            filterable: false, flex: 1,
        },
        {
            field: 'stockQuantity', headerName: 'S??? l?????ng kho', width: 150, sortable: false,
            filterable: false, flex: 1,
        },

    ];
    const handleClose = () => {
        props.handleClose()
    }
    const handleSubmit = () => {
        props.handleSubmit()
        checkOut(room)
    }
    const handleClick = (event, cellValues) => {
        alert(cellValues.row.name);
    };
    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };
    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };
    const handleAddItem = (event, cellValues) => {
        let idArr = servicesUsed.map(a => a.id)
        let rowId = cellValues.row.id
        let newServiceTotal = 0;
        //n???u ???? c?? sp th?? +1
        if (idArr.includes(rowId)) {
            let item = servicesUsed.find(x => x.id === rowId)
            let updatedItem = {
                ...item,
                quantity: item.quantity + 1
            }
            let newServicesUsed = servicesUsed.filter(function (item) {
                return item.id != rowId;
            });
            newServicesUsed.push(updatedItem)
            newServicesUsed.sort(function (a, b) {
                return a.id - b.id || a.name.localeCompare(b.name);
            });
            for (const item of newServicesUsed) {
                console.log("newServiceTotal", newServiceTotal)
                newServiceTotal += item.quantity * item.price
            }
            setState({
                ...state,
                servicesUsed: newServicesUsed,
                serviceTotal: newServiceTotal
            })
        }
        //ch??a c?? th?? th??m m???i v??o
        else {
            let newItem = {
                id: cellValues.row.id,
                name: cellValues.row.name,
                quantity: 1,
                price: cellValues.row.price
            }
            let newServicesUsed = [...state.servicesUsed, newItem]
            for (const item of newServicesUsed) {
                newServiceTotal += item.quantity * item.price
            }
            setState({
                ...state,
                servicesUsed: newServicesUsed,
                serviceTotal: newServiceTotal
            })
        }
    };
    const handleDeleteItem = (value) => {
        let itemId = value.id
        let newServiceTotal = 0;
        if (value.quantity > 1) {
            console.log("1")
            let item = servicesUsed.find(x => x.id === itemId)
            let updatedItem = {
                ...item,
                quantity: item.quantity - 1
            }
            let newServicesUsed = servicesUsed.filter(function (item) {
                return item.id != itemId;
            });
            newServicesUsed.push(updatedItem)
            newServicesUsed.sort(function (a, b) {
                return a.id - b.id || a.name.localeCompare(b.name);
            });
            for (const item of newServicesUsed) {
                newServiceTotal += item.quantity * item.price
            }
            setState({
                ...state,
                servicesUsed: newServicesUsed,
                serviceTotal: newServiceTotal
            })
        } else {
            let newServicesUsed = servicesUsed.filter(service => service.id !== itemId)
            for (const item of newServicesUsed) {
                newServiceTotal += item.quantity * item.price
            }
            setState({
                ...state,
                servicesUsed: newServicesUsed,
                serviceTotal: newServiceTotal
            })
        }
    }
    const handleSelectionChange = (selection) => {
        setSelectedRows(selection);
    };
    const handleDelete = () => {
        let guestNotSelected = guests.filter(guest => !selectedRows.includes(guest.id))
        setState({
            ...state,
            guests: guestNotSelected
        })
    };
    const handleOpenModalAddGuestInfo = () => {
        setState({
            ...state,
            isOpenModalAddGuest: !isOpenModalAddGuest
        })
    }
    const handleAddGuest = (data) => {
        setState({
            ...state,
            guests: [...guests, data],
            isOpenModalAddGuest: false
        })
    }
    const onChangeSelect = (event) => {
        console.log(event.target.value);
    };
    const onChangeSearch = (event, value) => {
        setState({
            ...state,
            guests: value
        })
    }
    // const servicesUsed = [
    //     {
    //         id: 1,
    //         name: "Cocacola",
    //         quantity: 2,
    //         price: 10000
    //     },
    //     {
    //         id: 2,
    //         name: "N?????c l???c",
    //         quantity: 3,
    //         price: 10000
    //     },
    // ]
    const defaultProps = {
        options: guestList,
        getOptionLabel: (option) => option.lastName + " " + option.firstName
    }
    console.log("state", state)

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='lg' >
            <DialogTitle align="center">Ph??ng {room.roomName}</DialogTitle>
            <DialogContent>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} alignSelf="center">
                                <Button variant="contained" color="primary" onClick={() => handleOpenModalAddGuestInfo()}>
                                    Th??m m???i kh??ch
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
                                <Autocomplete
                                    {...defaultProps}
                                    disableClearable
                                    multiple
                                    value={room.guests}
                                    filterSelectedOptions
                                    renderTags={() => null}
                                    onChange={onChangeSearch}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            // fullWidth
                                            label="T??m kh??ch h??ng..."
                                        // InputProps={{
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //             <IconButton disabled>
                                        //                 <SearchIcon style={{ fill: "#1769aa" }} />
                                        //             </IconButton>
                                        //         </InputAdornment>
                                        //     )
                                        // }}
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                        <ModalAddGuestInfo open={isOpenModalAddGuest} handleClose={handleOpenModalAddGuestInfo} handleAddGuest={handleAddGuest} />
                        <div style={{ width: '100%', paddingTop: 10 }}>
                            <DataGrid
                                autoHeight
                                rows={room.guests}
                                columns={columns}
                                pageSize={2}
                                rowsPerPageOptions={[2]}
                                checkboxSelection={true}
                                onCellClick={handleCellClick}
                                onRowClick={handleRowClick}
                                onSelectionModelChange={handleSelectionChange}

                            />
                            {selectedRows.length > 0 &&
                                <IconButton size="small" onClick={() => handleDelete()}>
                                    <DeleteIcon style={{ fill: "red" }} />
                                </IconButton>
                            }
                        </div>

                    </Grid>

                    <Grid item xs={6}>
                        <Paper variant="outlined">
                            <Box p={4}>
                                <Grid container columnSpacing={3}>
                                    <Grid item xs={6} >
                                        <TextField
                                            id="datetime-local"
                                            label="Gi??? v??o"
                                            type="datetime-local"
                                            defaultValue={room.checkinTime}
                                            fullWidth
                                            shrink="true"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="datetime-local"
                                            label="Gi??? ra d??? ki???n"
                                            type="datetime-local"
                                            defaultValue={dayjs().format('YYYY-MM-DDTHH:mm')}
                                            fullWidth
                                            shrink="true"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box mt={2}>
                                            <FormControl fullWidth>
                                                <InputLabel id="type-price">H??nh th???c ngh???</InputLabel>
                                                <Select
                                                    labelId="type-price"
                                                    id="type-price"
                                                    label="H??nh th???c ngh???"
                                                    value={"Ng??y ????m"}
                                                    onChange={onChangeSelect}
                                                >
                                                    <MenuItem key={1} value={"????m"}>????m</MenuItem>
                                                    <MenuItem key={2} value={"Ng??y ????m"}>Ng??y ????m</MenuItem>
                                                    <MenuItem key={3} value={"Tu???n"}>Tu???n</MenuItem>
                                                    <MenuItem key={4} value={"Th??ng"}>Th??ng</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">??</InputAdornment>,
                                            }}
                                            margin="normal"
                                            name="deposit"
                                            type="number"
                                            id="deposit"
                                            label="?????t tr?????c"
                                            value={room.deposit ? room.deposit : 0}
                                            shrink="true"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">??</InputAdornment>,
                                            }}
                                            margin="normal"
                                            name="reduced-fee"
                                            type="number"
                                            id="reduced-fee"
                                            label="Gi???m tr???"
                                            value={room?.reduceFee ? room?.reduceFee : 0}
                                            shrink="true"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">??</InputAdornment>,
                                            }}
                                            margin="normal"
                                            name="additional-fee"
                                            type="number"
                                            id="additional-fee"
                                            label="Ph??? thu"
                                            shrink="true"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ width: '100%', height: 260, }}>
                            <DataGrid
                                rowHeight={40}
                                rows={services}
                                columns={servicesColumn}
                                pageSize={4}
                                rowsPerPageOptions={[4]}
                                onCellClick={handleCellClick}
                                onRowClick={handleRowClick}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper variant="outlined">
                            <Box>
                                <Table aria-label="caption table">
                                    {/* D???ch v??? s??? d???ng */}
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>T??n</TableCell>
                                            <TableCell align="right">S??? l?????ng</TableCell>
                                            <TableCell align="right">Th??nh ti???n</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {room?.servicesUsed?.length ? room?.servicesUsed?.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell align="right">
                                                    <IconButton size="small" onClick={() => handleDeleteItem(row)}>
                                                        <RemoveCircleOutlineIcon style={{ fill: "red" }} />
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.serviceName}
                                                </TableCell>

                                                <TableCell align="right">{row.quantity}</TableCell>
                                                <TableCell align="right">{row.quantity * row.price}</TableCell>
                                            </TableRow>
                                        ))
                                            : <TableRow>
                                                <TableCell align="center" colSpan={5}>Ch??a s??? d???ng d???ch v??? g??</TableCell>
                                            </TableRow>
                                        }
                                        <TableRow>
                                            <TableCell rowSpan={3} />
                                            <TableCell colSpan={2}>T???ng d???ch v???</TableCell>
                                            <TableCell align="right">{room.serviceTotal}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Paper>

                    </Grid>
                    <Grid item xs={4}>
                        <Grid container >
                            <Grid item xs={12} pb={2}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Ghi ch??"
                                    multiline
                                    rows={2}
                                    defaultValue="Ghi ch??"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Paper variant="outlined">
                                    <Box pl={4} pb={2} pt={2}>
                                        <Grid container>
                                            <Grid item xs={2}></Grid>
                                            <Grid item xs={10}>
                                                <Grid container>
                                                    <Grid item xs={6}>
                                                        <Typography>Ti???n ph??ng: </Typography>
                                                        <Typography>Ti???n d???ch v???: </Typography>
                                                        <Typography>?????t tr?????c: </Typography>
                                                        <Typography fontWeight="bold">T???ng thanh to??n: </Typography>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <Typography textAlign="right">700.000??</Typography>
                                                        <Typography textAlign="right">20.000??</Typography>
                                                        <Typography textAlign="right">500.000??</Typography>
                                                        <Typography textAlign="right" fontWeight="bold">220.000??</Typography>
                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                    </Box>
                                </Paper>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={() => handleClose()}>????ng</Button>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>Tr??? ph??ng</Button>
            </DialogActions>
        </Dialog >
    )
    // console.log("open 2", open)
    // return (


    // );
}
React.memo(CheckOutModal, (props, nextProps) => {
    if (props === nextProps) {
        // don't re-render/update
        return true
    }
})

export default CheckOutModal;