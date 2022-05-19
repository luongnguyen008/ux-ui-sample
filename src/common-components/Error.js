import * as React from 'react';
import Box from '@mui/material/Box';
import ErrorImage from '../images/error.jpg'

function Error() {
    return (
        <Box sx={{ display: 'flex' }}>
            <img src={ErrorImage} style={{width: "100%", height: "100%" }} alt="Logo"/>
        </Box>
    );
}

export default Error