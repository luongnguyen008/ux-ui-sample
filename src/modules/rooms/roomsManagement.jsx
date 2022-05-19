import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import ReadyRoom from './readyRoom';
import OccupiedRoom from './occupiedRoom';
import DirtyRoom from './dirtyRoom';
import { Slider, Box, Paper, Tooltip } from '@mui/material';
import Divider from '@mui/material/Divider';
import OutOfServiceRoom from './outOfServiceRoom';
import { useGetLyric2 } from '../../utils/apiCalls';
import Loading from '../../common-components/Loading';
import Autocomplete from '@mui/material/Autocomplete';
import { useGetAllGuests } from '../../services/guests/guest.service'
import { useGetAllRooms } from "../../services/rooms/room.service";
import SquareIcon from '@mui/icons-material/Square';
import BedIcon from '@mui/icons-material/Bed';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

function RoomManagement(props) {
    const [checked, setChecked] = React.useState({
        displayReady: true,
        displayOccupied: true,
        displayDirty: true,
        displayOos: true
    });
    const { displayDirty, displayOos, displayOccupied, displayReady } = checked
    const [zoom, setZoom] = useState({
        width: 230, height: 170
    })


    const roomList = useSelector((state) => state.roomReducer.roomList);
    const [state, setState] = useState({
        rooms: []
    })
    useEffect(() => {
        setState({
            ...state,
            rooms: roomList
        })
    }, [JSON.stringify(roomList)])
    const { rooms } = state
    const { getAllGuests } = useGetAllGuests()
    const { getAllRooms } = useGetAllRooms()
    useEffect(() => {
        getAllGuests()
        getAllRooms()
    }, [])
    let arr = [{ id: 1, status: 'occupied' }, { id: 2, status: 'ready' }, { id: 3, status: 'dirty' }, { id: 4, status: 'out-of-service' }, { id: 5, status: 'ready' }]
    function valuetext(value) {
        return `${value}%`;
    }
    const sliderStyle = {
        background: "white",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: "50px",
        maxWidth: "15%",
        marginLeft: 'auto',
        marginRight: 20,
    }
    // const handleChange = (event, newValue) => {
    //     switch (newValue) {
    //         case 0:
    //             setZoom({ width: 180, height: 120 })
    //             break;
    //         case 20:
    //             setZoom({ width: 200, height: 140 })
    //             break;
    //         case 40:
    //             setZoom({ width: 220, height: 160 })
    //             break;
    //         case 60:
    //             setZoom({ width: 230, height: 170 })
    //             break;
    //         case 80:
    //             setZoom({ width: 260, height: 190 })
    //             break;
    //         case 100:
    //             setZoom({ width: 300, height: 200 })
    //             break;
    //     }
    // };
    const filterList = (obj) => {
        let newList = []
        if (obj.displayReady) {
            let a = roomList.filter(x => x.status === 1)
            newList = newList.concat(a)
        }
        if (obj.displayOccupied) {
            let a = roomList.filter(x => x.status === 2)
            newList = newList.concat(a)
        }
        if (obj.displayDirty) {
            let a = roomList.filter(x => x.status === 3)
            newList = newList.concat(a)
        }
        if (obj.displayOos) {
            let a = roomList.filter(x => x.status === 4)
            newList = newList.concat(a)
        }
        newList.sort(function (a, b) {
            return a.id - b.id || a.roomName.localeCompare(b.roomName);
        });

        setState({
            ...state,
            rooms: newList
        })

    }
    const handleChangeReady = (event) => {
        setChecked({
            ...checked,
            displayReady: event.target.checked
        });
        filterList({
            displayReady: event.target.checked,
            displayOccupied: displayOccupied,
            displayDirty: displayDirty,
            displayOos: displayOos
        })
    };
    const handleChangeOccupied = (event) => {
        setChecked({
            ...checked,
            displayOccupied: event.target.checked
        });
        filterList({
            displayReady: displayReady,
            displayOccupied: event.target.checked,
            displayDirty: displayDirty,
            displayOos: displayOos
        })
    };
    const handleChangeDirty = (event) => {
        setChecked({
            ...checked,
            displayDirty: event.target.checked
        });
        filterList({
            displayReady: displayReady,
            displayOccupied: displayOccupied,
            displayDirty: event.target.checked,
            displayOos: displayOos
        })
    };
    const handleChangeOos = (event) => {
        setChecked({
            ...checked,
            displayOos: event.target.checked
        });
        filterList({
            displayReady: displayReady,
            displayOccupied: displayOccupied,
            displayDirty: displayDirty,
            displayOos: event.target.checked
        })
    };
    return (
        // <React.Fragment>
        //     {isLoading ?
        //         <Loading />
        //         :
        <React.Fragment>
            <Grid container style={{ position: 'fixed', zIndex: "100" }} rowSpacing={4} spacing={2}>
                <Paper elevation={0} style={{ width: '100%', height: "90px" }} >
                    <Grid ml={2} mt={2} container rowSpacing={4} spacing={2}>
                        <Grid item xs={2}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <Checkbox
                                    checked={displayOccupied}
                                    onChange={handleChangeOccupied}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    style={{
                                        color: "red",
                                    }}
                                />
                                <span style={{ color: "red" }}>Phòng có khách</span>


                            </div>

                        </Grid>
                        <Grid item xs={2}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <Checkbox
                                    checked={displayReady}
                                    onChange={handleChangeReady}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    style={{
                                        color: "green",
                                    }}
                                />
                                <span style={{ color: "green" }}>Phòng trống</span>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <Checkbox
                                    checked={displayDirty}
                                    onChange={handleChangeDirty}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    style={{
                                        color: "orange",
                                    }}
                                />
                                <span style={{ color: "orange" }}>Phòng chưa dọn</span>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <Checkbox
                                    checked={displayOos}
                                    onChange={handleChangeOos}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    style={{
                                        color: "#1769aa",
                                    }}
                                />
                                <span style={{ color: "#1769aa" }}>Phòng đang sửa chữa</span>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid container rowSpacing={4} spacing={2}>
                <Grid item xs={12} style={{ height: "80px" }}>

                </Grid>
                {
                    rooms.map((data) => {

                        return (
                            < React.Fragment key={data.id} >
                                <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                                    {(data.status === 1 && displayReady === true) && <ReadyRoom room={data} styleZoom={zoom} />}
                                    {(data.status === 2 && displayOccupied === true) && <OccupiedRoom room={data} styleZoom={zoom} />}
                                    {(data.status === 3 && displayDirty === true) && <DirtyRoom room={data} styleZoom={zoom} />}
                                    {(data.status === 4 && displayOos === true) && <OutOfServiceRoom room={data} styleZoom={zoom} />}
                                </Grid>
                            </React.Fragment>
                        )


                    }

                    )
                }
            </Grid >
        </React.Fragment >
        // {/* <div style={sliderStyle}>
        //     <Slider
        //         aria-label="Zoom"
        //         defaultValue={0}
        //         getAriaValueText={valuetext}
        //         valueLabelDisplay="auto"
        //         onChange={handleChange}
        //         step={20}
        //         marks
        //         min={0}
        //         max={100}
        //     />
        // </div> */}
        // }


        // </React.Fragment>



    );
}

export default RoomManagement;