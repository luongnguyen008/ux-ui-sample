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
import { useEditUser } from '../../services/users/user.service';

function ModalEditNewUser(props) {
    const { open, user } = props;
    console.log("props", props)
    const [state, setState] = useState({
        roleIds: []
    })

    useEffect(() => {
        if (user) {
            setState({
                id: user.id,
                address: user.address,
                email: user.email,
                idCard: user.idCard,
                name: user.name,
                phone: user.phone,
                roleIds: user?.roles?.map(x => {
                    if (x.nameRole == "ROLE_STAFF")
                        return 2
                    if (x.nameRole == "ROLE_ADMIN")
                        return 1
                }),
                salaryDay: 0,
                gender: user.sex,
                username: user.username
            })
        }
    }, [user?.id])

    const { name, address, email, idCard, phone, roleIds, salaryDay, gender, username } = state

    const { editUser } = useEditUser()
    const handleEditUser = (event) => {
        let data = {
            address: state.address,
            email: state.email,
            idCard: state.idCard,
            name: state.name,
            phone: state.phone,
            roles: state.roleIds,
            salaryDay: 0,
            sex: state.gender == "Nam" ? true : false,
            username: state.username
        }
        editUser(state.id, data)
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
                roleIds: typeof value === 'string' ? value.split(',') : value,
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
            <DialogTitle align="center">CH???NH S???A TH??NG TIN NG?????I D??NG </DialogTitle>
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
                                value={name}
                                onChange={handleNameChange}
                                margin="normal"
                                required
                                id="name"
                                label="H??? v?? T??n"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={username}
                                onChange={handleUsernameChange}
                                margin="normal"
                                required
                                id="username"
                                label="T??n ????ng nh???p"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={6} pl={4}>
                            <FormControl required component="fieldset">
                                <FormLabel component="legend">Gi???i t??nh</FormLabel>
                                <RadioGroup onChange={handleGenderChange} value={gender == "Nam" ? true : false} row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value={true} control={<Radio />} label="Nam" />
                                    <FormControlLabel value={false} control={<Radio />} label="N???" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} >
                            <Box mt={1}>
                                <FormControl style={{ width: 192 }}>
                                    <InputLabel id="role">Ph??n quy???n</InputLabel>
                                    <Select
                                        multiple
                                        labelId="role"
                                        id="role"
                                        label="Ph??n quy???n"
                                        value={[1]}
                                        onChange={handleRoleChange}
                                    >
                                        <MenuItem key={1} value={1}>Qu???n tr??? vi??n</MenuItem>
                                        <MenuItem key={2} value={2}>Nh??n vi??n l??? t??n</MenuItem>
                                        <MenuItem key={3} value={3}>Nh??n vi??n d???n ph??ng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid item xs={6} pl={3}>
                            <TextField
                                value={address}
                                onChange={handleAddressChange}
                                margin="normal"
                                required
                                id="address"
                                label="?????a ch???"
                                name="address"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={email}
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
                                value={phone}
                                onChange={handlePhoneChange}
                                margin="normal"
                                required
                                id="phone"
                                label="S??? ??i???n tho???i"
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                value={idCard}
                                onChange={handleIdCardChange}
                                margin="normal"
                                required
                                label="S??? CMND/ H??? chi???u"
                                name="idCard"
                                type="text"
                                id="idCard"
                            />
                        </Grid>
                        <Grid item xs={6} pl={3}>
                            <Box mt={1}>
                                <FormControl style={{ width: 192 }}>
                                    <InputLabel id="role">Tr???ng th??i</InputLabel>
                                    <Select
                                        labelId="role"
                                        id="role"
                                        label="Ph??n quy???n"
                                        value={1}
                                        onChange={handleRoleChange}
                                    >
                                        <MenuItem key={1} value={1}>Ho???t ?????ng</MenuItem>
                                        <MenuItem key={2} value={2}>Ng???ng ho???t ?????ng</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
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
                    ????ng
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEditUser}>
                    Th??m
                </Button>
            </DialogActions>

        </Dialog>
    );
}

export default ModalEditNewUser;