"use client";

import { useDispatch, useSelector } from "react-redux";

import AddTask from "@/lib/components/AddTask";
import Footer from "@/lib/components/Footer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import NoTasks from "@/lib/components/NoTasks";
import TaskCard from "@/lib/components/TaskCard";

export default function Home() {
  const tasks = useSelector((state) => state.task.tasks);

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
            {tasks.map((task, index) => (
              <TaskCard key={index} task={task} />
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
