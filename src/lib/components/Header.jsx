import { Box, Typography } from "@mui/material";

function Header() {
    return (
        <Box sx={{ textAlign: "center" }}>
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