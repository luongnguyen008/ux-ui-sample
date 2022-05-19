import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import HotelIcon from '@mui/icons-material/Hotel';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DashboardIcon from '@mui/icons-material/Dashboard';

import CustomListItem from "./customListItem"
import CustomNestedList from "./customNestedList"


function Sidebar(props) {
    const theme = useTheme();
    const handleDrawerClose = () => {
        props.handleDrawerClose()
    }
    return (
        <Drawer variant="permanent" open={props.open}>
            <DrawerHeader>
                <Avatar sx={{ width: 32, height: 32, marginRight: "20px", marginLeft: "10px" }}>L</Avatar>
                <Typography sx={{ marginRight: "auto" }}>Brand Hotel</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <CustomListItem
                    to={"/home"}
                    primary={"Trang chủ"}
                    icon={<HomeIcon />}
                    roles={["ROLE_ADMIN", "ROLE_STAFF"]}
                />
                <CustomListItem
                    to={"/rooms"}
                    primary={"Sơ đồ phòng"}
                    icon={<HotelIcon />}
                    roles={["ROLE_ADMIN", "ROLE_STAFF"]}
                />
                <CustomListItem
                    to={"/reservation"}
                    primary={"Danh sách đặt phòng"}
                    icon={<CalendarTodayIcon />}
                    roles={["ROLE_ADMIN", "ROLE_STAFF"]}
                />
                <CustomListItem
                    to={"/register"}
                    primary={"Quản lí người dùng"}
                    icon={<VpnKeyIcon />}
                    roles={["ROLE_ADMIN", "ROLE_STAFF"]}
                />
                {/* <CustomNestedList
                    primaryFather={"Cấu hình"}
                    iconFather={<SettingsIcon />}
                    roles={["ROLE_ADMIN"]}
                    kids={[
                        { to: "/register", primary: "Người dùng", icon: <VpnKeyIcon /> },
                        { to: "/hotel-settings", primary: "Thông tin phòng", icon: <RoomPreferencesIcon /> }
                    ]}

                /> */}
                <CustomNestedList
                    primaryFather={"Thống kê"}
                    iconFather={<QueryStatsIcon />}
                    roles={["ROLE_ADMIN"]}
                    kids={[
                        { to: "/statistics", primary: "Doanh Thu", icon: <EqualizerIcon /> },
                        { to: "/statistics2", primary: "Chi tiết thống kê", icon: <DashboardIcon /> }
                    ]}

                />
                <CustomListItem
                    to={"/bills"}
                    primary={"Hóa đơn "}
                    icon={<ReceiptLongIcon />}
                    roles={["ROLE_ADMIN", "ROLE_STAFF"]}
                />

            </List>
        </Drawer>
    );
}
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default Sidebar;