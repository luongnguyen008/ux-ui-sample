import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Paper from '@mui/material/Paper';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import * as dayjs from 'dayjs'
import { useState } from 'react';

export default function Statistics() {

    const [state, setState] = useState({
        openGraph: false,
        openSubGraph: false
    })
    const { openGraph, openSubGraph } = state
    const handleClickBar = (item) => {
        console.log("item", item)
        setState({
            ...state,
            openGraph: false,
            openSubGraph: true
        })
    }
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
    console.log(dayjs().format('MM-DD-YYYY'))
    return (
        <React.Fragment>
            <Box width="500" height="500" >
                <Paper m={4} fullWidth elevation={2}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography m={3} fontSize={20} sx={{ fontWeight: 'bold', color: "#1769aa" }}>Biểu đồ doanh thu</Typography>
                        </Grid>
                        <Grid item xs={3} m={2}>
                            <TextField
                                id="date"
                                label="Từ"
                                type="month"
                                defaultValue={"2021-01"}
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={3} m={2}>
                            <TextField
                                id="date-1"
                                label="Đến"
                                type="month"
                                onChange={handleChangeMonth}
                                defaultValue={"2021-12"}
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
                <Box mt={3}>
                    <Paper fullWidth elevation={3}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Typography m={3} fontSize={24} sx={{ fontWeight: 'bold' }}>Tổng doanh thu : 969.250.000 đ</Typography>
                            </Grid>
                        </Grid>
                        <BarChart
                            onClick={() => handleClickBar()}
                            width={1000}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={DataFormater} />
                            <Tooltip formatter={DataFormater} />
                            <Legend />
                            <Bar dataKey="lastYear" name='Hiện tại' fill="#008AD8" />
                            <Bar dataKey="now" name='Cùng kỳ năm trước' fill="#34d9eb" />
                        </BarChart>
                    </Paper>
                </Box>
            }
            {openSubGraph &&
                <Box mt={3} >
                    <Paper fullWidth elevation={3}>
                        <Grid container>
                            <Grid item xs={11}>
                                <Typography m={3} fontSize={24} sx={{ fontWeight: 'bold' }}>Tổng doanh thu tháng: 95.250.000 đ</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton sx={{ align: 'right' }} onClick={() => onClose()}>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>


                        <BarChart
                            onClick={(item) => handleClickBar(item)}
                            width={1000}
                            height={300}
                            data={data1}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis tickFormatter={DataFormater} />
                            <Tooltip formatter={DataFormater} />
                            <Bar dataKey="value" fill="#008AD8" />
                        </BarChart>
                    </Paper>
                </Box>
            }

        </React.Fragment >

    );
}

const data = [
    {
        name: 'Tháng 1',
        now: 40000000,
        lastYear: 24000000,
        amt: 2400,
    },
    {
        name: 'Tháng 2',
        now: 30000000,
        lastYear: 13980000,
        amt: 2210,
    },
    {
        name: 'Tháng 3',
        now: 20000000,
        lastYear: 98000000,
        amt: 2290,
    },
    {
        name: 'Tháng 4',
        now: 27800000,
        lastYear: 39080000,
        amt: 2000,
    },
    {
        name: 'Tháng 5',
        now: 18900000,
        lastYear: 48000000,
        amt: 2181,
    },
    {
        name: 'Tháng 6',
        now: 23900000,
        lastYear: 38000000,
        amt: 2500,
    },
    {
        name: 'Tháng 7',
        now: 34900000,
        lastYear: 43000000,
        amt: 2100,
    },
    {
        name: 'Tháng 8',
        now: 20000000,
        lastYear: 98000000,
        amt: 2290,
    },
    {
        name: 'Tháng 9',
        now: 27800000,
        lastYear: 39080000,
        amt: 2000,
    },
    {
        name: 'Tháng 10',
        now: 18900000,
        lastYear: 48000000,
        amt: 2181,
    },
    {
        name: 'Tháng 11',
        now: 23900000,
        lastYear: 38000000,
        amt: 2500,
    },
    {
        name: 'Tháng 12',
        now: 34900000,
        lastYear: 43000000,
        amt: 2100,
    },
];
const data1 = [
    {
        name: 1,
        value: 4056000
    },
    {
        name: 2,
        value: 1497000
    },
    {
        name: 3,
        value: 8077000
    },
    {
        name: 4,
        value: 3879000
    },
    {
        name: 5,
        value: 1924000
    },
    {
        name: 6,
        value: 3466000
    },
    {
        name: 7,
        value: 4575000
    },
    {
        name: 8,
        value: 2567000
    },
    {
        name: 9,
        value: 6676000
    },
    {
        name: 10,
        value: 5248000
    },
    {
        name: 11,
        value: 6885000
    },
    {
        name: 12,
        value: 7901000
    },
    {
        name: 13,
        value: 4419000
    },
    {
        name: 14,
        value: 2624000
    },
    {
        name: 15,
        value: 5033000
    },
    {
        name: 16,
        value: 7517000
    },
    {
        name: 17,
        value: 3012000
    },
    {
        name: 18,
        value: 7671000
    },
    {
        name: 19,
        value: 5831000
    },
    {
        name: 20,
        value: 1969000
    },
    {
        name: 21,
        value: 4130000
    },
    {
        name: 22,
        value: 5847000
    },
    {
        name: 23,
        value: 3476000
    },
    {
        name: 24,
        value: 7088000
    },
    {
        name: 25,
        value: 1515000
    },
    {
        name: 26,
        value: 6928000
    },
    {
        name: 27,
        value: 7563000
    },
    {
        name: 28,
        value: 3151000
    },
    {
        name: 29,
        value: 7152000
    },
    {
        name: 30,
        value: 5446000
    },
    {
        name: 31,
        value: 7326000
    }
]