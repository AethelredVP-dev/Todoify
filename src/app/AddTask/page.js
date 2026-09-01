"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Tasks from "@/constants/tasks.json";
import { addTask, resetValues, setValues } from "@/features/TaskSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// One-line suggestions pulled straight from tasks.json
const suggestions = Tasks.map((task) => task.title);

export default function AddTaskPage() {
  const { values } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const router = useRouter();
  // Rotating placeholder — swaps the string every 2 seconds

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % suggestions.length),
      2000,
    );
    return () => clearInterval(id);
  }, []);

  // One handler updates whichever field changed, matched by its "name"
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setValues({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name.trim()) return; // guard against empty names
    dispatch(addTask({ id: crypto.randomUUID(), ...values }));
    dispatch(resetValues());
    router.push("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: 3,
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 520 }}>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Add task
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Create a task and organize it later.
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <TextField
              autoComplete="off"
              name="name"
              label="Add task"
              value={values.name}
              onChange={handleChange}
              placeholder={suggestions[index % suggestions.length]}
            />

            <TextField
              select
              name="category"
              label="Category"
              value={values.category}
              onChange={handleChange}
            >
              <MenuItem value="None">None</MenuItem>
              <MenuItem value="work">Work</MenuItem>
              <MenuItem value="personal">Personal</MenuItem>
              <MenuItem value="learning">Learning</MenuItem>
              <MenuItem value="health">Health</MenuItem>
            </TextField>

            <TextField
              fullWidth
              select
              id="importance"
              name="importance"
              label="Importance"
              value={values.importance}
              onChange={handleChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" size="large">
              Add task
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
