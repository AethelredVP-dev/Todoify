"use client";

import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import AddTask from "@/lib/components/AddTask";
import ThemeButton from "@/lib/components/ThemeButton";
import Footer from "@/lib/components/Footer";
import { deleteTask } from "@/features/TaskSlice";
import { Fab } from "@mui/material";
import { Bin } from "@keyline-icons/react";

const importanceColor = (level) => {
  if (level === "high") return "error";
  if (level === "medium") return "warning";
  return "success";
};

export default function Home() {
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 3, sm: 5 },
        }}
      >
        <Box
          component="header"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: { xs: 4, sm: 6 },
          }}
        >
          <ThemeButton />
        </Box>

        <Stack
          spacing={2}
          alignItems="center"
          sx={{
            width: "100%",
            mb: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h3" component="h1" fontWeight={700}>
            My Tasks
          </Typography>

          <Typography color="text.secondary">
            Stay focused. Finish what matters.
          </Typography>

          <AddTask />
        </Stack>

        {tasks.length === 0 ? (
          <Stack
            spacing={1.5}
            alignItems="center"
            sx={{
              flex: 1,
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
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: "100%", maxWidth: 1100 }}
          >
            {tasks.map((task) => (
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
                          label={task.category || "No category"}
                          size="small"
                          variant="outlined"
                        />

                        <Chip
                          label={task.importance || "Low"}
                          size="small"
                          color={importanceColor(task.importance)}
                        />
                      </Stack>

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
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      <Box
        component="footer"
        sx={{
          width: "100%",
          mt: "auto",
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
}
