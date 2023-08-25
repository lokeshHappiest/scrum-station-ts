export const fetchPersistedTasks = () => {
  const tasksStr = localStorage.tasks;
  console.log(`tasksStr = ${tasksStr}`);
  return tasksStr ? JSON.parse(tasksStr) : undefined;
};
