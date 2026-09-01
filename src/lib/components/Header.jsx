import { Box, Typography } from "@mui/material";
import ThemeButton from "./ThemeButton";

function Header() {
    return (
        <Box component="header" sx={{ textAlign: "center" }}>
            <ThemeButton />
            <Typography variant="h3">
                Todoify
            </Typography>
            <Typography variant="caption">
                Track Tasks for You
            </Typography>
        </Box>

    );
}

export default Header;