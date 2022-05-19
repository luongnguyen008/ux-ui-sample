import React, { useEffect, useState } from 'react';
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useCreateUser } from '../../services/users/user.service';
import { useHistory } from 'react-router'


function ModalAddNewUser(props) {
    const history = useHistory()
    const { open } = props;
    const [state, setState] = useState({ roles: [] })
    const { name, dob, roles } = state

    const { createUser } = useCreateUser()

    const handleAddUser = (event) => {
        let data = {
            address: state.address,
            email: state.email,
            idCard: state.idCard,
            name: state.name,
            password: state.username,
            phone: state.phone,
            roles: state.roles,
            salaryDay: 0,
            sex: state.gender,
            username: state.username
        }
        createUser(data)
        props.handleClose()
    }
    const handleNameChange = (e) => {
        setState({
            ...state,
            name: e.target.value
        })
    }
    const handleUsernameChange = (e) => {
        setState({
            ...state,
            username: e.target.value
        })
    }
    const handleDobChange = (e) => {
        setState({
            ...state,
            dob: e.target.value
        })
    }
    const handleRoleChange = (event) => {
        const {
            target: { value },
        } = event;
        setState(
            // On autofill we get a the stringified value.
            {
                ...state,
                roles: typeof value === 'string' ? value.split(',') : value,
            }
        );
    };
    const handleGenderChange = (e) => {
        setState({
            ...state,
            gender: e.target.value
        })
    }
    const handleAddressChange = (e) => {
        setState({
            ...state,
            address: e.target.value
        })
    }
    const handleEmailChange = (e) => {
        setState({
            ...state,
            email: e.target.value
        })
    }
    const handlePhoneChange = (e) => {
        setState({
            ...state,
            phone: e.target.value
        })
    }
    const handleIdCardChange = (e) => {
        setState({
            ...state,
            idCard: e.target.value
        })
    }
    const handleClose = () => {
        props.handleClose()
    }
    const handleSubmit = () => {
        props.handleClose()
    }
    console.log("state", state)
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle align="center">THÊM MỚI NGƯỜI DÙNG </DialogTitle>
            <DialogContent>
                <Box onSubmit={handleSubmit} pl={4}>
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        direction="row"
                    >
                        <Grid item xs={6} pl={3}>
                            <TextField
                                onChange={handleNameChange}
                                margin="normal"
                                required
                                id="name"
                                label="Họ và Tên"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleUsernameChange}
                                margin="normal"
                                required
                                id="username"
                                label="Tên đăng nhập"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={6} pl={4}>
                            <FormControl required component="fieldset">
                                <FormLabel component="legend">Giới tính</FormLabel>
                                <RadioGroup onChange={handleGenderChange} row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value={true} control={<Radio />} label="Nam" />
                                    <FormControlLabel value={false} control={<Radio />} label="Nữ" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} >
                            <Box mt={1}>
                                <FormControl style={{ width: 192 }}>
                                    <InputLabel id="role">Phân quyền</InputLabel>
                                    <Select
                                        multiple
                                        labelId="role"
                                        id="role"
                                        label="Phân quyền"
                                        value={roles}
                                        onChange={handleRoleChange}
                                    >
                                        <MenuItem key={1} value={1}>Quản trị viên</MenuItem>
                                        <MenuItem key={2} value={2}>Nhân viên lễ tân</MenuItem>
                                        <MenuItem key={3} value={3}>Nhân viên dọn phòng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={6} pl={3}>
                            <TextField
                                onChange={handleAddressChange}
                                margin="normal"
                                required
                                id="address"
                                label="Địa chỉ"
                                name="address"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleEmailChange}
                                margin="normal"
                                required
                                name="email"
                                label="Email"
                                type="text"
                                id="dob"
                            />
                        </Grid>
                        <Grid item xs={6} pl={3}>
                            <TextField
                                onChange={handlePhoneChange}
                                margin="normal"
                                required
                                id="phone"
                                label="Số điện thoại"
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                onChange={handleIdCardChange}
                                margin="normal"
                                required
                                label="Số CMND/ Hộ chiếu"
                                name="idCard"
                                type="text"
                                id="idCard"
                            />
                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={6} >

                        </Grid>


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

export default ModalAddNewUser;