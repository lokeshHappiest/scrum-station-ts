import Grid from "@mui/material/Grid";
import "./TaskBoardGrid.scss";
import { Paper } from "@mui/material";
import TaskCard from "../TaskCard";
import ITask from "../../Models/ITask";
import ITaskStatus from "../../Models/ITaskStatus";

interface ITaskBoardGridProps {
  tasks?: ITask[];
  statuses?: ITaskStatus[];
  onItemClick?: (task: ITask) => void;
}

const TaskBoardGrid = ({
  tasks,
  statuses,
  onItemClick,
}: ITaskBoardGridProps) => {
  // const getUniqueTaskStatus = ({ tasks }) =>
  //   tasks && tasks.length > 0
  //     ? [...new Set(tasks.map((task) => task.status))]
  //         .map((status, index) => ({
  //           displayOrder: index + 1,
  //           name: status,
  //         }))
  //         .sort(
  //           (statusA, statusB) => statusA.displayOrder < statusB.displayOrder
  //         )
  //     : [];
  // const taskStatuses = getUniqueTaskStatus({ tasks });

  let taskStatuses: ITaskStatus[] = statuses ?? [];

  const getStatusWiseTasks = (statusTypes: ITaskStatus[], tasks?: ITask[]) => {
    let statusWiseTasks: { [key: string]: ITask[] } = {};
    statusTypes?.forEach((statusObj) => {
      statusWiseTasks[statusObj.id] =
        tasks?.filter((task) => task.status === statusObj.id) ?? [];
    });
    return statusWiseTasks;
  };

  let statusWiseTasks = getStatusWiseTasks(taskStatuses, tasks);

  const calculateGridSize = (statuses: ITaskStatus[]) => {
    return statuses && statuses.length > 0 ? 12 / statuses.length : 3;
  };
  console.log(`calculateGridSize = ${calculateGridSize(taskStatuses)}`);
  const handleOnTaskClick = (task: ITask): void => {
    console.log(`handleOnTaskClick task = ${task}`);
    onItemClick?.(task);
  };
  return (
    <div className="task-board-grid-container">
      <Grid container className="grid-container">
        {taskStatuses.map((taskStatus) => {
          return (
            <Grid
              key={taskStatus.displayOrder}
              item
              xs={12}
              md={calculateGridSize(taskStatuses)}
              className="columns-grid"
              data-testid="status-grid"
            >
              <Paper
                sx={{
                  height: "100%",
                  width: "90%",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#063961" : "#063961",
                  margin: "10px auto 10px auto",
                  overflow: "auto",
                }}
              >
                <div className="title">
                  {taskStatus.title}
                  {statusWiseTasks &&
                    statusWiseTasks[taskStatus.id] &&
                    statusWiseTasks[taskStatus.id].length > 0 && (
                      <span className="count">
                        {statusWiseTasks[taskStatus.id].length}
                      </span>
                    )}
                </div>
                {statusWiseTasks[taskStatus.id] &&
                  statusWiseTasks[taskStatus.id].map((task) => (
                    <TaskCard
                      data-testid="task-card"
                      title={task.title}
                      taskPriority={task.priority}
                      taskTId={task.tId}
                      taskType={task.type}
                      onClick={() => handleOnTaskClick({ ...task })}
                    />
                  ))}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TaskBoardGrid;
