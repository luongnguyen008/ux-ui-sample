import { Box, Dialog, Table, TableHead, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ReservationService from '../../../services/reservation/reservation';
import useStyles from './DialogDetailReservation.styles';
import Loading from '../../../common-components/Loading';
import Error from '../../../common-components/Error.js'

function DialogDetailReservation(props) {
    const { open, reservationChoose } = props
    const classes = useStyles();
    const [reservationDetail, setReservationDetail] = useState({
        id: 0,
        nameCustomer: "",
        phoneCustomer:"",
        numberRoom: 0,
        fromDate:"",
        toDate: "",
        status: "",
        note:""
    });
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        async function getListRevenue() {
            try{
                if(reservationChoose !== null){
                    console.log("AAAAAAA");
                 let response = await ReservationService.getReservationById(reservationChoose.id);
                 console.log(response.data)
                  setReservationDetail(response.data);
                  setIsLoading(true);
                }
            }catch(error){
                setIsLoading(false);
                setError(true);
            }
        }
        getListRevenue();
    }, [reservationChoose])
        
    const handleClose = () => {
        props.handleClose()
    }
    return (
        <Dialog open={open} fullWidth={true}  onClose={handleClose}>
            {isLoading === true ? (
                <Box>
                    {error === true ? (
                    <Box className={classes.iframe}>
                        <Box className={classes.title}>
                            <Typography className={classes.titleText} variant="h4">Chi tiết đơn đặt phòng</Typography>
                        </Box>
                        <Box className={classes.contentTop}>
                            <Box className={classes.infoPersonal}>
                                <Typography>Tên khách: {reservationDetail.nameCustomer}</Typography>
                                <Typography>Số điện thoại: {reservationDetail.phoneCustomer}</Typography>
                                <Typography>Số phòng đặt: {reservationDetail.numberRoom}</Typography>
                            </Box>
                            <Box className={classes.infoReservation}>
                                <Typography>Ngày đến: {reservationDetail.fromDate}</Typography>
                                <Typography>Ngày đi: {reservationDetail.toDate}</Typography>
                                <Typography>Trạng thái: {reservationDetail.status}</Typography>
                            </Box>
                        </Box>
                        <Box className={classes.note}>
                                <Typography>Ghi chú:</Typography>
                                <Typography>{reservationDetail.note}</Typography>
                        </Box>
                    </Box>
                    ): (
                        <Box className={classes.iframe}>
                            <Error/>
                        </Box>
                    )}
                </Box>
            ) : (
                <Loading/>
            )}
        </Dialog>

    );
}
export default DialogDetailReservation;