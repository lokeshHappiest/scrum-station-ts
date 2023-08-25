import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import TaskFormContainer from "../../components/TaskFormContainer";
import ICreateTaskFormValues from "../../Models/ICreateTaskFormValues";
import "./CreateTask.scss";
import Constants from "../../Constants";

const CreateTask = () => {
  const navigation = useNavigate();
  const state = useLocation();
  console.log(`state = ${JSON.stringify(state)}`);

  const initialValues: ICreateTaskFormValues = {
    tId: "",
    title: "",
    desc: "",
    type: "",
    status: "",
    priority: 10,
  };

  const handleBackBtnClick = () => {
    navigation("/");
  };

  const handleCreateTaskBtnClick = () => {};

  const handleUpdateTaskBtnClick = () => {};

  return (
    <div className="create-task-page-container">
      <div className="nav-bar">
        <Button
          className="back-btn"
          variant="contained"
          onClick={handleBackBtnClick}
        >
          Back
        </Button>
      </div>
      <div className="create-task-page-content">
        <div className="page-title">Create Task</div>
        <TaskFormContainer
          mode={Constants.taskFormContainerMode.createMode}
          initialFormValues={initialValues}
          onCreateTaskBtnClick={handleCreateTaskBtnClick}
          onUpdateTaskBtnClick={handleUpdateTaskBtnClick}
        />
      </div>
    </div>
  );
};

export default CreateTask;
