import { Card, CardContent, Chip, Fab, Grid, Stack, Typography } from "@mui/material";
import { deleteTask } from "@/features/TaskSlice";
import { Bin } from "@keyline-icons/react";
import { Pen } from "@keyline-icons/react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { categoryProps } from "../utils/CategoryProps";


function TaskCard({ task }) {
    const importanceColor = (level) => {
        if (level === "high") return "error";
        if (level === "medium") return "warning";
        return "success";
    };

    const dispatch = useDispatch();
    return (

        <Grid key={task.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
                sx={{
                    height: "100%",
                    borderRadius: 3,
                    transition: "transform 160ms ease, box-shadow 160ms ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 10,
                    },
                }}
            >
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant="h6" component="h2">
                            {task.name}
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ flexWrap: "nowrap" }}
                            useFlexGap
                        >
                            <Chip
                                {...categoryProps(task.category)}
                                label={task.category || "No category"}
                                size="small"
                                variant="filled"
                            />

                            <Chip
                                label={task.importance || "Low"}
                                size="small"
                                color={importanceColor(task.importance)}
                            />
                        </Stack>

                        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-start" }}>
                            <Fab
                                size="small"
                                color="error"
                                variant="extended"
                                onClick={() => dispatch(deleteTask(task.id))}
                                sx={{ alignSelf: "flex-start" }}
                            >
                                <Bin />
                                <Typography variant="caption">Delete task</Typography>
                            </Fab>
                            <Fab

                                component={Link}
                                href={`/EditTask?id=${task.id}`}
                                size="small"
                                variant="extended"
                                color="primary"
                            >
                                <Pen />
                                <Typography variant="caption">Edit task</Typography>
                            </Fab>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default TaskCard;