import React, { useState } from 'react';
import { Dialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { countryList } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
function ModalAddGuestInfo(props) {
    const { open } = props;
    const [state, setState] = useState({ nationality: "Viet Nam" })
    const { firstName, lastName, dob } = state
    const handleAddGuest = (event) => {
        let data = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            dob: dob
        }
        props.handleAddGuest(data)
    }
    const handleFirstNameChange = (e) => {
        setState({
            ...state,
            firstName: e.target.value
        })
    }
    const handleLastNameChange = (e) => {
        setState({
            ...state,
            lastName: e.target.value
        })
    }
    const handleDobChange = (e) => {
        setState({
            ...state,
            dob: e.target.value
        })
    }
    const handleChangeNationality = (e) => {
        setState({
            ...state,
            nationality: e.target.value
        })
    }
    const handlePhoneNumberChange = (e) => {
        setState({
            ...state,
            phoneNumber: e.target.value
        })
    }
    const handleEmailChange = (e) => {
        setState({
            ...state,
            email: e.target.value
        })
    }
    const handleIDNumberChange = (e) => {
        setState({
            ...state,
            idNumber: e.target.value
        })
    }
    const handleAddressChange = (e) => {
        setState({
            ...state,
            address: e.target.value
        })
    }

    const handleClose = () => {
        props.handleClose()
    }
    return (
        <Dialog open={open} onClose={handleClose} sx={{}}>
            <DialogTitle>Thêm thông tin khách</DialogTitle>
            <DialogContent>
                <Box pl={4}>
                    <Grid
                        container
                    >
                        {/* Tên */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleFirstNameChange}
                                margin="normal"
                                required
                                id="firstName"
                                label="Tên"
                                name="firstName"
                                autoComplete="firstName"
                                autoFocus
                            />
                        </Grid>
                        {/* Họ */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleLastNameChange}
                                margin="normal"
                                required
                                id="lastName"
                                label="Họ"
                                name="lastName"
                                autoComplete="lastName"
                            />
                        </Grid>
                        {/* Ngày sinh */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleDobChange}
                                margin="normal"
                                required
                                name="dob"
                                type="date"
                                id="dob"
                                label="Ngày sinh"
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        {/* Số điện thoại */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handlePhoneNumberChange}
                                margin="normal"
                                required
                                name="phone-number"
                                type="number"
                                id="phone-number"
                                label="Số điện thoại"
                            />
                        </Grid>
                        {/* Quốc tịch */}
                        <Grid item xs={6}>
                            <Box mt={2}>
                                <FormControl style={{ width: 192 }}>
                                    <InputLabel id="nationality">Quốc tịch</InputLabel>
                                    <Select
                                        labelId="nationality"
                                        id="nationality"
                                        label="Quốc tịch"
                                        value={state.nationality}
                                        onChange={handleChangeNationality}
                                    >
                                        {
                                            countryList.map((country, index) => {
                                                return (
                                                    <MenuItem key={index} value={country}>{country}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        {/* Số cmnd */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleIDNumberChange}
                                margin="normal"
                                required
                                name="id-number"
                                type="number"
                                id="id-number"
                                label="Số CMND/ Hộ chiếu"
                            />
                        </Grid>
                        {/* Địa chỉ */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleAddressChange}
                                margin="normal"
                                required
                                name="address"
                                type="text"
                                id="address"
                                label="Địa chỉ"
                            />
                        </Grid>
                        {/* Email */}
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleEmailChange}
                                margin="normal"
                                name="email"
                                type="text"
                                id="email"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Box></Box>
                        </Grid>



                    </Grid>

                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="primary" onClick={handleClose}>Đóng</Button>
                <Button variant="contained" color="primary" onClick={handleAddGuest}>Thêm</Button>
            </DialogActions>



        </Dialog>
    );
}

export default ModalAddGuestInfo;