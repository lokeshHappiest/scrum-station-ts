import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    setTasks: (state, action) => {
      const tasks = action.payload;
      return {
        tasks: [...tasks],
      };
    },
    addTask: (state, action) => {
      const task = action.payload;
      return {
        tasks: [...state.tasks, task],
      };
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      const newTasks = state.tasks.filter((task) => task.id !== taskId);
      return {
        tasks: [...newTasks],
      };
    },
    clearTasks: () => {
      return {
        tasks: [],
      };
    },
  },
});

export const { setTasks, addTask, removeTask, clearTasks } = tasksSlice.actions;

export default tasksSlice.reducer;

// const Constants = {
//   taskStatus: {
//     todo: "todo",
//     inProgress: "in-progress",
//     completed: "completed",
//     prRaised: "pr-raised",
//   },
// };

// const task = {
//   id: 1,
//   title: "feat-add-tasks",
//   desc: "asd sadfsf sf sf sdf",
//   status: Constants.taskStatus.todo,
// };
