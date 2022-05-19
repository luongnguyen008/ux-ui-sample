import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Grid, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import BuildIcon from '@mui/icons-material/Build';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HailIcon from '@mui/icons-material/Hail';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import { useFixRoom } from '../../services/rooms/room.service';

function OutOfServiceRoom(props) {
    const { room } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const { fixRoom } = useFixRoom()
    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };
    const handleRepairRoom = () => {
        fixRoom(room)
    };
    return (
        <React.Fragment>
            <Card sx={props.styleZoom}>
                <CardActionArea onClick={handleClickAnchor}>
                    <CardContent style={{ backgroundColor: "#1769aa" }} sx={props.styleZoom}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <BuildIcon fontSize='large' style={{ fill: "white" }} />
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
                                    Phòng đang sửa chữa
                                </Typography>
                            </Grid>
                            <Grid item xs={12} align="center">
                                <Typography fontWeight="bold" display="inline" color="white" variant="h6"  >
                                    09:05
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
                <MenuItem disabled>
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
                <MenuItem disabled >
                    <CleaningServicesOutlinedIcon /><Typography variant="h7">Dọn phòng</Typography>
                </MenuItem>
                <MenuItem onClick={handleRepairRoom}>
                    <ConstructionOutlinedIcon /><Typography variant="h7"> Kết thúc sửa phòng</Typography>
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

export default React.memo(OutOfServiceRoom, areEqual);