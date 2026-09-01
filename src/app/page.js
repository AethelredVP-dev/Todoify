"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import Footer from "@/lib/components/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { TaskCard, TaskFilter, AddTask, NoTasks } from "@/lib/components/Task";

export default function Home() {
  const [statusFilter, setStatusFilter] = useState("all");
  const tasks = useSelector((state) => state.task.tasks);

  const visibleTasks = tasks.filter((task) => {
    if (statusFilter === "pending") return !task.completed;
    if (statusFilter === "done") return task.completed;

    return true;
  });

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
        <Stack
          spacing={2}
          sx={{
            width: "100%",
            mb: 4,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h1" fontWeight={700}>
            My Tasks
          </Typography>

          <Typography color="text.secondary">
            Stay focused. Finish what matters.
          </Typography>
          <TaskFilter
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />

          <AddTask />
        </Stack>

        {tasks.length === 0 ? (
          <NoTasks />
        ) : (
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", maxWidth: 1100, justifyContent: "center" }}
          >
            {visibleTasks.map((task, index) => (
              <TaskCard task={task} key={index} />
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
