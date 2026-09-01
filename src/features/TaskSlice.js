import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: { name: "", category: "", importance: "" },
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // Merge partial fields so callers can update one input at a time
    setValues: (state, action) => {
      state.values = {
        ...state.values,
        ...action.payload,
      };
    },
    resetValues: (state) => {
      state.values = initialState.values;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, changes } = action.payload;

      const task = state.tasks.find((item) => item.id === id);

      if (!task) return;

      Object.assign(task, changes);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.tasks.find((item) => item.id === action.payload);

      if (!task) return;

      task.completed = !task.completed;
    },
  },
});

export const {
  setValues,
  resetValues,
  addTask,
  deleteTask,
  editTask,
  toggleTaskStatus,
} = taskSlice.actions;
export default taskSlice.reducer;
