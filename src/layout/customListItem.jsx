import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from '@mui/material/ListItemIcon';
import React from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux";

function CustomListItem(props) {
    // const user = useSelector((state) => state.userReducer.user);
    // const userRole = user?.roles?.map(r => r.name)
    // const { roles } = props
    const location = useLocation()
    // if (!userRole?.some(r => roles?.includes(r))) {
    //     return <div></div>
    // }
    // else {
    return (
        <React.Fragment key={props.to}>
            <ListItem
                button
                component={Link}
                to={props.to}
                selected={props.to === location.pathname}
            >
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary={props.primary} />
            </ListItem>
        </React.Fragment>

    )
    // }

}
export default CustomListItem