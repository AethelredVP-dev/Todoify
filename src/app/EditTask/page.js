"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { editTask } from "@/features/TaskSlice";

const emptyForm = {
  name: "",
  category: "",
  importance: "",
};

export default function EditTaskPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const tasks = useSelector((state) => state.task.tasks);

  const task = tasks.find((item) => item.id === id);

  const [formValues, setFormValues] = useState(emptyForm);
  const [hasLoadedTask, setHasLoadedTask] = useState(false);

  useEffect(() => {
    if (!task || hasLoadedTask) return;

    setFormValues({
      name: task.name,
      category: task.category,
      importance: task.importance,
    });

    setHasLoadedTask(true);
  }, [task, hasLoadedTask]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValues.name.trim()) return;

    dispatch(
      editTask({
        id,
        changes: {
          name: formValues.name.trim(),
          category: formValues.category,
          importance: formValues.importance,
        },
      }),
    );

    router.push("/");
  };

  if (!id) {
    return (
      <Stack spacing={2} alignItems="center" sx={{ py: 8 }}>
        <Typography variant="h5">No task was selected.</Typography>

        <Button component={Link} href="/" variant="contained">
          Back to tasks
        </Button>
      </Stack>
    );
  }

  if (!task) {
    return (
      <Stack spacing={2} alignItems="center" sx={{ py: 8 }}>
        <Typography variant="h5">Task not found.</Typography>

        <Typography color="text.secondary">
          It may have been deleted, or this link is no longer valid.
        </Typography>

        <Button component={Link} href="/" variant="contained">
          Back to tasks
        </Button>
      </Stack>
    );
  }

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        py: { xs: 4, sm: 7 },
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Edit task
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Update the details for your task.
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              label="Task name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              fullWidth
              required
              autoFocus
            />

            <TextField
              select
              label="Category"
              name="category"
              value={formValues.category}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
              <MenuItem value="health">Health</MenuItem>
              <MenuItem value="learning">Learning</MenuItem>
            </TextField>

            <TextField
              select
              label="Importance"
              name="importance"
              value={formValues.importance}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>

            <Stack direction="row" spacing={1.5}>
              <Button type="submit" variant="contained" fullWidth>
                Save changes
              </Button>

              <Button component={Link} href="/" variant="outlined" fullWidth>
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
