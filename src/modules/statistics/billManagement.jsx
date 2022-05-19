import React, { useEffect, useState } from 'react';
import { withSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Loading from '../../common-components/Loading';
import { useSelector } from "react-redux";
import ModalPdf from './modalPdf';
import samplePdf from './sample.pdf'
import { Typography } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function BillManagement(props) {
    const [state, setState] = useState(() => initState())
    const billList = [
        {
            id: 1,
            name: "HD.000001",
            dateCreate: "31/12/2021",
            room: "101",
            customer: "Nguyễn văn A",
            description: "Thanh toán tiền phòng"
        },
        {
            id: 2,
            name: "HD.000002",
            dateCreate: "24/05/2021",
            room: "202",
            customer: "Nguyễn văn B",
            description: "Thanh toán tiền phòng"
        },
        {
            id: 3,
            name: "HD.000003",
            dateCreate: "13/02/2021",
            room: "301",
            customer: "Nguyễn Thị c",
            description: "Thanh toán tiền phòng"
        },
        {
            id: 4,
            name: "HD.000004",
            dateCreate: "17/12/2021",
            room: "104",
            customer: "Nguyễn văn D",
            description: "Thanh toán tiền phòng"
        },
        {
            id: 5,
            name: "HD.000005",
            dateCreate: "31/12/2021",
            room: "205",
            customer: "Nguyễn Duy E",
            description: "Thanh toán tiền phòng"
        },

    ]
    function initState() {
        return {
            isOpenModalPdf: false
        }
    }
    const { isOpenModalPdf } = state

    const columns = [
        {
            field: " ",
            width: 100,
            sortable: false,
            filterable: false,
            disableClickEventBubbling: true,
            headerAlign: 'center',
            align: "center",
            renderCell: (cellValues) => {
                return (
                    <Box>
                        <IconButton
                            style={{ alignContent: "center" }}
                            size="small"
                            onClick={(event) => {
                                openModalPdf();
                            }}
                        >
                            <VisibilityIcon style={{ fill: "green" }} />
                        </IconButton>
                        <IconButton
                            style={{ alignContent: "center" }}
                            size="small"
                            onClick={(event) => {
                                download();
                            }}
                        >
                            <DownloadIcon style={{ fill: "grey" }} />
                        </IconButton>
                    </Box>

                );
            }
        },
        { field: 'name', headerName: 'Tên hóa đơn', align: "center", width: 180, headerAlign: 'center' },
        { field: 'dateCreate', type: 'date', headerName: 'Ngày tạo', align: "center", headerAlign: 'center', width: 150, },
        { field: 'room', headerName: 'Phòng', headerAlign: 'center', align: "center", width: 150, },
        { field: 'customer', headerName: 'Tên khách hàng', headerAlign: 'center', align: "center", width: 200, },
        { field: 'description', headerName: 'Mô tả', width: 140 },
    ];
    const handleClickEdit = (event, cellValues) => {
    };
    const openModalPdf = () => {
        setState({
            ...state,
            isOpenModalPdf: !isOpenModalPdf
        })
    }
    const download = () => {
        const link = document.createElement('a');
        link.href = samplePdf;
        link.download = "sample receipt";
        link.click();
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

            <React.Fragment>
                <Typography mb={2} fontSize={25} sx={{ fontWeight: 'bold', color: "#1769aa" }}>Quản lí hóa đơn</Typography>
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
                                    name="dob"
                                    type="date"
                                    id="dob"
                                    label="Ngày tạo"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    margin="normal"
                                    name="dob"
                                    type="date"
                                    id="dob"
                                    label="Ngày vào"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    margin="normal"
                                    name="dob"
                                    type="date"
                                    id="dob"
                                    label="Ngày ra"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    margin="normal"
                                    id="username"
                                    label="Tên khách hàng"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    margin="normal"
                                    id="username"
                                    label="Số điện thoại"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    margin="normal"
                                    id="username"
                                    label="Tên phòng"
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
                <DataGrid
                    autoHeight
                    rows={billList}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    onCellClick={handleCellClick}
                    onRowClick={handleRowClick}

                />
                <ModalPdf pdf={samplePdf} open={isOpenModalPdf} handleClose={openModalPdf} />
            </React.Fragment>

        </React.Fragment>
    );
}

export default withSnackbar(BillManagement);