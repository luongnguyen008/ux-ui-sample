import React, { useEffect, useState } from 'react';
import { withSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import ModalAddNewUser from './modalAddNewUser'
import ModalEditUser from './modalEditUser'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useGetAllUsers } from '../../services/users/user.service';
import { useGetAllRoles } from '../../services/auth/auth.service';
import Loading from '../../common-components/Loading';
import { useSelector } from "react-redux";
import { uniqueId } from 'lodash';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Grid from '@mui/material/Grid';
import { TextField } from '@material-ui/core';
import { Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function Register(props) {
    const [state, setState] = useState(() => initState())
    const userList = useSelector((state) => state.userReducer.userList);
    const { usersList, isOpenModalAdd, isOpenModalEdit, user } = state
    const { getAllUsers, isLoading } = useGetAllUsers()
    const { getAllRoles } = useGetAllRoles()
    function initState() {
        return {
            user: {},
            usersList: [],
            isOpenModalAdd: false,
            isOpenModalEdit: false,
        }
    }
    useEffect(() => {
        getAllUsers();
        getAllRoles();
    }, [])


    useEffect(() => {
        if (userList) {
            setState({
                ...state,
                usersList: userList //.map(x => ({ ...x, id: uniqueId() }))
            })
        }

    }, [JSON.stringify(userList)])

    const columns = [
        {
            field: " ",
            width: 60,
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
                            handleClickEdit(event, cellValues);
                        }}
                    >
                        <EditIcon style={{ fill: "orange" }} />
                    </IconButton>
                );
            }
        },
        { field: 'name', headerName: 'Họ và tên', width: 150 },
        { field: 'sex', headerName: 'Giới tính', width: 140 },
        { field: 'email', headerName: 'Email', headerAlign: 'center', width: 150, },
        { field: 'address', headerName: 'Địa chỉ', headerAlign: 'center', width: 150, },
        { field: 'phone', headerName: 'Số điện thoại', headerAlign: 'center', width: 150, },
        {
            field: 'status', headerName: 'Trạng thái', headerAlign: 'center', width: 150,
            renderCell: (cellValues) => {
                if (cellValues.value == "Hoạt động")
                    return (
                        <Box style={{
                            alignContent: 'center',
                            color: 'green'
                        }}>
                            <FiberManualRecordIcon style={{ fill: "green", paddingTop: "3px" }} /> {cellValues.getValue(cellValues.id, 'status') || ''}
                        </Box >

                    )
                else
                    return (
                        <Box style={{
                            alignContent: 'center',
                            color: 'red'
                        }}>
                            <FiberManualRecordIcon style={{ fill: "red", paddingTop: "3px" }} /> {cellValues.getValue(cellValues.id, 'status') || ''}
                        </Box >

                    )
            }
        },
    ];
    const handleClickEdit = (event, cellValues) => {
        console.log("cellValues.row", cellValues.row)
        setState({
            ...state,
            user: cellValues.row,
            isOpenModalEdit: !isOpenModalEdit
        })
    };
    const openModalAddNewUser = () => {
        setState({
            ...state,
            isOpenModalAdd: !isOpenModalAdd
        })
        console.log(state);
    }
    const openModalEditUser = () => {
        setState({
            ...state,
            isOpenModalEdit: !isOpenModalEdit
        })
    }

    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };
    console.log("state", state)
    return (
        <React.Fragment>
            <Typography mb={2} fontSize={25} sx={{ fontWeight: 'bold', color: "#1769aa" }}>Quản lí người dùng</Typography>
            <Grid
                container
                justifyContent="space-evenly"
                alignItems="center"
                direction="row"
                mb={4}
            >
                <Grid item xs={8}>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                type="text"
                                id="dob"
                                label="Tên người dùng"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                type="text"
                                id="dob"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                name="dob"
                                type="date"
                                id="dob"
                                label="Ngày sinh"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                label="Phân quyền"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                label="Số điện thoại"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                margin="normal"
                                label="Trạng thái"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid alignSelf="center" item xs={4}>
                        <Button size='large' variant="contained" color="primary" startIcon={<FilterAltIcon />}>Lọc</Button>
                    </Grid>
                </Grid>
            </Grid>
            {isLoading ?
                <Loading />
                :
                <React.Fragment>
                    <Button sx={{ mb: 3 }} variant="contained" color="primary" onClick={openModalAddNewUser}>
                        Thêm mới
                    </Button>
                    <span></span>
                    <ModalAddNewUser open={isOpenModalAdd} handleClose={openModalAddNewUser} />
                    <ModalEditUser open={isOpenModalEdit} handleClose={openModalEditUser} user={user} />



                    <DataGrid
                        autoHeight
                        rows={usersList}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        onCellClick={handleCellClick}
                        onRowClick={handleRowClick}

                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}

export default withSnackbar(Register);