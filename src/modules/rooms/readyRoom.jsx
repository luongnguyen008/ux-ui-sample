import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Grid, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CheckInModal from './checkInModal';
import HotelIcon from '@mui/icons-material/Hotel';
import BedIcon from '@mui/icons-material/Bed';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';

function ReadyRoom(props) {
    const { room } = props
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);

    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setOpen(false);
    };

    console.log("abc")
    return (
        <React.Fragment>
            <CheckInModal open={open} room={room} handleSubmit={handleSubmit} handleClose={handleClose} />
            <Card sx={props.styleZoom}>
                <CardActionArea onClick={handleClickAnchor}>
                    <CardContent style={{ backgroundColor: "green" }} sx={props.styleZoom}>

                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <BedIcon fontSize='large' style={{ fill: "white" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography align="center" fontSize="28px" fontWeight="bold" color="white" gutterBottom variant="h5" component="div">
                                    {room.roomName}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography align="center" fontSize="12px" color="white" variant="h5" component="div">
                                    Phòng
                                </Typography>
                                <Typography align="center" fontSize="12px" color="white" variant="h5" component="div">
                                    {room.typeRoomName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography fontSize="17px" color="white" variant="h6" align="center" >
                                    Sẵn sàng đón khách
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Typography fontWeight="bold" display="inline" color="white" variant="h6"  >
                                    09:04
                                </Typography>
                                <Typography margin="9px" fontSize="14px" display="inline" color="white" variant="h6" >
                                    31/12/2021
                                </Typography>
                            </Grid>

                        </Grid>
                    </CardContent>

                </CardActionArea>

            </Card>
            <Menu
                anchorEl={anchorEl}
                open={openAnchor}
                onClose={handleCloseAnchor}
                onClick={handleCloseAnchor}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 10.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                }}
                transformOrigin={{ horizontal: "right", vertical: "center" }}
            >
                <MenuItem onClick={handleClickOpen}>
                    <HailIcon /> <Typography variant="h7">Khách thuê phòng</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <LogoutIcon /><Typography variant="h7">Trả phòng</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <LocalCafeOutlinedIcon /> <Typography variant="h7">Cập nhật dịch vụ</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <ChangeCircleOutlinedIcon /> <Typography variant="h7">Đổi phòng</Typography>
                </MenuItem>
                <MenuItem>
                    <CleaningServicesOutlinedIcon /><Typography variant="h7">Dọn phòng</Typography>
                </MenuItem>
                <MenuItem>
                    <ConstructionOutlinedIcon /><Typography variant="h7">Sửa phòng</Typography>
                </MenuItem>
            </Menu>

        </React.Fragment >



    );
}
function areEqual(prevProps, nextProps) {

    if (JSON.stringify(prevProps.styleZoom) === JSON.stringify(nextProps.styleZoom)) {
        // don't re-render/update
        return true
    } else return false
}

export default React.memo(ReadyRoom, areEqual);