import { Stack, Typography } from "@mui/material";

function NoTasks() {
    return (
        <Stack
            spacing={1.5}
            sx={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                minHeight: 280,
                textAlign: "center",
            }}
        >
            <Typography variant="h5">No tasks yet</Typography>

            <Typography color="text.secondary">
                Add your first task and start organizing your day.
            </Typography>
        </Stack>
    );
}

export default NoTasks;