import React from "react";
import {Link as RouterLink} from 'react-router';
import {Typography, Button, Container, Box, Grid, Card, CardContent, Link} from "@mui/material";
import Page from "../Page/Page";

const features = [{
    name: "Emails",
    path: '/email',
    description: 'Email sending service used to test monthly messages.'
}, {name: "Valentine", path: '/valentine', description: '❤️ A special message for 2/14/25.'}, {
    name: "TBD",
    path: '/',
    description: 'tbd...'
}];

const HomePage = () => {
    return (
        <Page>
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
                        Welcome to B2S
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Bing bop boom bop bing bop bam
                    </Typography>
                    <Button variant="contained" color="primary" sx={{mt: 2}}>
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Features Section */}
            <Container sx={{py: 6}}>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Link component={RouterLink} to={feature.path}>
                                        <Typography variant="h5">{feature.name}</Typography>
                                    </Link>
                                    <Typography color="textSecondary">{feature.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Page>
    );
};

export default HomePage;
