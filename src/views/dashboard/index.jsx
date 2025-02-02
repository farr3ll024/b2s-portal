import React from "react";
import {AppBar, Toolbar, Typography, Button, Container, Box, Grid, Card, CardContent} from "@mui/material";

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{flexGrow: 1}}>
                        My App
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                    py: 10,
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography variant="h2" gutterBottom>
                        Welcome to My App
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Build amazing experiences with Material UI
                    </Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}}>
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Container sx={{py: 6}}>
                <Grid container spacing={4}>
                    {["Feature 1", "Feature 2", "Feature 3"].map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{feature}</Typography>
                                    <Typography color="textSecondary">Description of {feature} goes here.</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default HomePage;
