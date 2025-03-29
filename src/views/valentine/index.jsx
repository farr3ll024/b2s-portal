import React from "react";
import {Typography, Button, Box} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {keyframes} from "@emotion/react";
import Page from '../../components/Page/Page'

// Heartbeat animation
const heartbeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const ValentinePage = () => {
    return (
        <Page>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    backgroundImage: "url('https://source.unsplash.com/1600x900/?love,hearts')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                    textAlign: "center",
                    px: 3,
                }}
            >
                {/* Animated Heart */}
                <FavoriteIcon
                    sx={{
                        fontSize: 80,
                        color: "red",
                        animation: `${heartbeat} 1.5s infinite`,
                        mb: 2,
                    }}
                />

                {/* Love Message */}
                <Typography variant="h3" fontWeight="bold" sx={{ color: 'black' }}>
                    Happy Valentine’s Day, My Love! ❤️
                </Typography>
                <Typography variant="h5" sx={{mt: 2, maxWidth: "600px", color: 'black'}}>
                    Every moment with you is like a dream come true. You are my happiness, my love, and my forever.
                    I’m so grateful to have you in my life. Today is just another reminder of how much I adore you.
                </Typography>

                {/* Surprise Button */}
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{mt: 4}}
                    href="https://open.spotify.com/playlist/37i9dQZF1DXc6IFF23C9jj"
                    target="_blank"
                    startIcon={<FavoriteIcon/>}
                >
                    A Special Surprise for You
                </Button>
            </Box>
        </Page>

    );
};

export default ValentinePage;
