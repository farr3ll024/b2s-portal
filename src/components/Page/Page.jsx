import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router';
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";

const Page = ({children}) => {
    return (<>
        <AppBar position="static">
            <Toolbar>
                <Link component={RouterLink} to="/" sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}>
                    <Typography variant="h6">B2S</Typography>
                </Link>
                <Button color="inherit" sx={{display: 'none'}}>Login</Button>
            </Toolbar>
        </AppBar>
        {children}
    </>);
};

Page.propTypes = {
    children: PropTypes.node
}

export default Page;
