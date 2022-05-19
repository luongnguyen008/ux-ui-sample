import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Grid, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CheckOutModal from './checkOutModal';
import HotelIcon from '@mui/icons-material/Hotel';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HailIcon from '@mui/icons-material/Hail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import LogoutIcon from '@mui/icons-material/Logout';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';

function OccupiedRoom(props) {
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
            <CheckOutModal open={open} room={room} handleSubmit={handleSubmit} handleClose={handleClose} />
            <Card sx={props.styleZoom}>
                <CardActionArea onClick={handleClickAnchor}>
                    <CardContent style={{ backgroundColor: "red" }} sx={props.styleZoom}>
                        <Grid container spacing={2} rowSpacing={4}>
                            <Grid pl={2} pt={3}>
                                <HotelIcon fontSize='large' style={{ fill: "white" }} />
                            </Grid>
                            <Grid pl={5} pt={3}>
                                <Typography align="center" fontSize="28px" fontWeight="bold" color="white" gutterBottom variant="h5" component="div">
                                    {room.roomName}
                                </Typography>
                            </Grid>
                            <Grid pl={4} pt={3}>
                                <Typography align="center" fontSize="12px" color="white" variant="h5" component="div">
                                    Phòng
                                </Typography>
                                <Typography align="center" fontSize="12px" color="white" variant="h5" component="div">
                                    {room.typeRoomName}
                                </Typography>
                            </Grid>
                            <Grid pl={2}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <HailIcon fontSize='small' style={{ fill: "white", paddingRight: "5px" }} />
                                    <span style={{ color: "white", fontSize: "13px", paddingRight: "5px" }} >
                                        Check-in:
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        07:05
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        31/12/21
                                    </span>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <AccessTimeIcon fontSize='small' style={{ fill: "white", paddingRight: "5px" }} />
                                    <span style={{ color: "white", fontSize: "13px", paddingRight: "5px" }} >
                                        Thời lượng:
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        2h10p
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <AttachMoneyIcon fontSize='small' style={{ fill: "white", paddingRight: "5px" }} />
                                    <span style={{ color: "white", fontSize: "13px", paddingRight: "5px" }} >
                                        Tổng tiền:
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        220.000đ
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <PaidIcon fontSize='small' style={{ fill: "white", paddingRight: "5px" }} />
                                    <span style={{ color: "white", fontSize: "13px", paddingRight: "5px" }} >
                                        Đặt trước:
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        0đ
                                    </span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <PriceCheckIcon fontSize='small' style={{ fill: "white", paddingRight: "5px" }} />
                                    <span style={{ color: "white", fontSize: "13px", paddingRight: "5px" }} >
                                        Còn thu:
                                    </span>
                                    <span style={{ color: "white", fontSize: "15px", paddingRight: "5px", fontWeight: "bold" }} >
                                        210.000đ
                                    </span>
                                </div>
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
                <MenuItem disabled >
                    <HailIcon /> Khách thuê phòng
                </MenuItem>
                <MenuItem onClick={handleClickOpen}>
                    <LogoutIcon /><Typography variant="h9">Trả phòng</Typography>
                </MenuItem>
                <MenuItem>
                    <LocalCafeOutlinedIcon /> <Typography variant="h7">Cập nhật dịch vụ</Typography>
                </MenuItem>
                <MenuItem >
                    <ChangeCircleOutlinedIcon /> <Typography variant="h7">Đổi phòng</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <CleaningServicesOutlinedIcon /><Typography variant="h7">Dọn phòng</Typography>
                </MenuItem>
                <MenuItem disabled>
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

export default React.memo(OccupiedRoom, areEqual);