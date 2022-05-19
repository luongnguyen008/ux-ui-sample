import React, { useEffect, useState } from 'react';
import { Dialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as dayjs from 'dayjs'
import { InputAdornment } from '@mui/material';
import { IconButton } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import GuestService from '../../../services/guest/guest.service';
import { toast } from "../../../utils/snackbarUtils"

function ModalAddNewReservation(props) {
    const { open, handleClose } = props
    const [guestList, setGuestList] = useState([
        {
            address: "",
            birthday: 0,
            email: "",
            firstName: "",
            id: 0,
            idCard: "",
            lastName: "",
            nationality: "",
            phoneNumber: ""
          }
    ]) 
    const [filtersGuest, setFiltersGuest] = useState({
        keyword: "0",
    });

    const handleSubmit = () =>{

    }
    const handleAddUser = () =>{

    }
    const showListCustomer = () =>{
        GuestService.getListGuest(filtersGuest).then((res) => {
            console.log(res)
           setFiltersGuest(
            res.data.map((item) => {
                return {
                    address: item.address,
                    birthday: item.birthday,
                    email: item.email,
                    firstName: item.firstName,
                    id: item.id,
                    idCard: item.idCard,
                    lastName: item.lastName,
                    nationality: item.nationality,
                    phoneNumber: item.phoneNumber
                }
            })
           ) 
        }).catch((err)=>{
            toast.error("Lấy danh sách khách hàng thất bại")
        }) 
    }

    const handleChangeNote = () =>{

    }
    const handleChangeName = () =>{

    }
    const handleChangePhone = () => {

    }
    const handleChangeNumberRoom = () =>{

    }

    return (
        <Dialog open={open} fullWidth={true}  onClose={handleClose} maxWidth='md'>
            <DialogTitle align="center">THÊM MỚI ĐƠN ĐẶT PHÒNG </DialogTitle>
            <DialogContent>
                <Grid item xs={12} pl={3} >
                    <TextField style={{marginTop: 5}}
                        fullWidth
                        label="Tìm khách hàng..."
                        onClick={showListCustomer}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon style={{ fill: "#1769aa" }} />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        />
                </Grid>
                <Box onSubmit={handleSubmit} xs={8}>
                    <Grid
                        container
                        alignItems="center"
                        direction="row"
                        style={{display: "flex"}}
                    >
                        <Grid item sm={6}>
                            <Grid xs={12} pl={3}>
                                <TextField
                                onChange={handleChangeName}
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Họ và Tên"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid xs={12} pl={3}>
                                <TextField
                                onChange={handleChangePhone}
                                    margin="normal"
                                    fullWidth
                                    id="phoneNumber"
                                    label="Số điện thoại"
                                    name="phoneNumber"
                                    autoComplete="phoneNumber"
                                />
                            </Grid>
                            <Grid xs={12} pl={3}>
                                <TextField
                                    onChange={handleChangeNumberRoom}
                                    margin="normal"
                                    fullWidth
                                    name="numberRoom"
                                    label="Số phòng dự định"
                                    type="number"
                                    id="dob"
                                />
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <Grid xs={12} pl={3}>
                                <TextField
                                    id="datetime-local"
                                    label="Ngày dự định đến"
                                    type="datetime-local"
                                    defaultValue={dayjs().format('YYYY-MM-DDTHH:mm')}
                                    fullWidth
                                    shrink="true"
                                />   
                            </Grid>
                            <Grid xs={12} pl={3} style={{marginTop: "20px"}}>
                                <TextField
                                    id="datetime-local"
                                    label="Ngày dự định đi"
                                    type="datetime-local"
                                    defaultValue={dayjs().format('YYYY-MM-DDTHH:mm')}
                                    fullWidth
                                    shrink="true"
                                />          
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} pl={3}>
                            <TextField
                                onChange={handleChangeNote}
                                margin="normal"
                                fullWidth
                                name="note"
                                label="Ghi chú"
                                type="text"
                                id="dob"
                            />
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClose}>
                    Đóng
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddUser}>
                    Thêm
                </Button>
            </DialogActions>

        </Dialog>
    );
}

export default ModalAddNewReservation;