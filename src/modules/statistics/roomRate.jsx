import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';

function RoomRate(props) {
    const [state, setState] = useState({
        openGraph: true,
    })
    const { openGraph } = state
    const handleClickSearch = () => {
        setState({
            ...state,
            openGraph: true,
        })
    }
    const handleChangeMonth = (e) => {
        console.log(e.target.value)
    }
    const onClose = () => {
        setState({
            ...state,
            openSubGraph: false,
            openGraph: true,
        })
    }
    const DataFormater = (number) => {
        if (number > 1000000000) {
            return (number / 1000000000).toString() + 'B';
        } else if (number > 1000000) {
            return (number / 1000000).toString() + 'M';
        } else if (number > 1000) {
            return (number / 1000).toString() + 'K';
        } else {
            return number.toString();
        }
    }
    return (
        <React.Fragment>

            <Box width="500" height="500" >
                <Paper m={4} elevation={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography mt={1} ml={7} fontSize={20} sx={{ fontWeight: 'bold', color: "#1769aa" }}>Tỉ lệ phòng ở</Typography>
                        </Grid>
                        <Grid item xs={3} mt={2} mb={2} ml={7}>
                            <TextField
                                id="date"
                                label="Từ"
                                type="date"
                                defaultValue={"2021-12-24"}
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={3} m={2}>
                            <TextField
                                id="date-1"
                                label="Đến"
                                type="date"
                                onChange={handleChangeMonth}
                                defaultValue={"2022-01-06"}
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={3} alignSelf={"center"}>
                            <Button size='large' variant="contained" color="primary" onClick={() => handleClickSearch()}>Tìm kiếm</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
            {openGraph &&
                <Box mt={3} fullWidth>
                    <Paper elevation={3}>
                        <AreaChart
                            width={800}
                            height={400}
                            data={data}
                            margin={{
                                top: 30,
                                right: 30,
                                left: 0,
                                bottom: 10,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                        </AreaChart>
                    </Paper>
                </Box>
            }


        </React.Fragment >

    );
}
const data = [
    {
        name: '24/12',
        uv: 0.85904058545833,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '25/12',
        uv: 0.6321508119045,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '26/12',
        uv: 0.457086320195,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '27/12',
        uv: 0.414084413092,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '28/12',
        uv: 0.315924955063,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '29/12',
        uv: 0.496965958019,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '30/12',
        uv: 0.5908047338626,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '31/12',
        uv: 0.908047338626,
        pv: 2400,
        amt: 2400,
    },
    {
        name: '01/01',
        uv: 0.904058545833,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '02/01',
        uv: 0.321508119045,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '03/01',
        uv: 0.657086320195,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '04/01',
        uv: 0.714084413092,
        pv: 4800,
        amt: 2181,
    },
    {
        name: '05/01',
        uv: 0.315924955063,
        pv: 3800,
        amt: 2500,
    },
    {
        name: '06/01',
        uv: 0.696965958019,
        pv: 4300,
        amt: 2100,
    },
];

export default RoomRate;