import { Card, CardContent, Chip, Fab, Grid, Stack, Typography } from "@mui/material";
import { deleteTask, toggleTaskStatus } from "@/features/TaskSlice";
import { Bin, Pen, Check, Clock } from "@keyline-icons/react";

import { useDispatch } from "react-redux";

import { categoryProps } from "@/lib/utils/CategoryProps";
import { useRouter } from "next/navigation";



function TaskCard({ task }) {
    const importanceColor = (level) => {
        if (level === "high") return "error";
        if (level === "medium") return "warning";
        return "success";
    };
    const router = useRouter()

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
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{
                                    flex: 1,
                                    fontWeight: 700,
                                    textDecoration: task.completed ? "line-through" : "none",
                                    opacity: task.completed ? 0.65 : 1,
                                    overflowWrap: "anywhere",
                                }}
                            >
                                {task.name}
                            </Typography>

                            <Chip
                                size="small"
                                label={task.completed ? "Completed" : "Active"}
                                color={task.completed ? "success" : "primary"}
                                variant={task.completed ? "filled" : "outlined"}
                                icon={task.completed ? <Check /> : <Clock />}
                                sx={{ flexShrink: 0 }}
                            />
                        </Stack>

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
                                size="medium"
                                color="error"
                                variant="extended"
                                onClick={() => dispatch(deleteTask(task.id))}
                                sx={{ alignSelf: "flex-start" }}
                            >
                                <Bin />
                                <Typography variant="caption">Delete task</Typography>
                            </Fab>
                            <Fab
                                onClick={() => router.push(`/EditTask?id=${task.id}`)}
                                size="medium"
                                variant="extended"
                                color="primary"
                            >
                                <Pen />
                                <Typography variant="caption">Edit task</Typography>
                            </Fab>
                            <Fab
                                variant="extended"
                                size="medium"
                                color={task.completed ? "success" : "primary"}
                                onClick={() => dispatch(toggleTaskStatus(task.id))}
                            >
                                {task.completed ? "Reopen task" : "Mark completed"}
                                {task.completed ? <Clock /> : <Check />}
                            </Fab>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default TaskCard;