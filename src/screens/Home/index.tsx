import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setTasks } from "../../redux/tasks/tasksReducer";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import tempTasks from "../../tempJson/tempTasks";
import TaskBoardGrid from "../../components/TaskBoardGrid";
import tempTaskStatuses from "../../tempJson/tempTaskStatuses";

import "./Home.scss";
import ITask from "../../Models/ITask";

const Home = () => {
  const tasks = useSelector(({ tasks }) => tasks);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // const persistedTasks = fetchPersistedTasks();
    // if (persistedTasks) {
    //   dispatch(setTasks(persistedTasks?.tasks));
    // }
    // dispatch(setTasks(tempTasks));
    // return () => {
    //   localStorage.tasks = JSON.stringify(tasks);
    // };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCreateTaskBtnClick = () => {
    navigate("/CreateTask");
  };
  const handleBoardItemClick = (task: ITask) => {
    console.log(`handleBoardItemClick = ${JSON.stringify(task)}`);
    navigate("/EditTask", { state: { task } });
  };
  return (
    <div className="home-container">
      <div className="create-task-btn-container">
        <Button
          className="create-task-btn"
          variant="contained"
          endIcon={<AddCircleOutlineIcon />}
          onClick={handleCreateTaskBtnClick}
        >
          Create
        </Button>
      </div>
      <div className="task-board-grid-container">
        <TaskBoardGrid
          tasks={tasks?.tasks}
          statuses={tempTaskStatuses}
          onItemClick={handleBoardItemClick}
        />
      </div>
    </div>
  );
};

export default Home;
