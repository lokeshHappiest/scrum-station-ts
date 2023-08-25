import React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import TaskFormContainer from "../../components/TaskFormContainer";

import "./EditTask.scss";
import ICreateTaskFormValues from "../../Models/ICreateTaskFormValues";
import Constants from "../../Constants";

const EditTask = () => {
  const navigation = useNavigate();
  const state = useLocation();
  const task = state?.state?.task;
  console.log(`EditTask state = ${JSON.stringify(task)}`);

  const initialValues: ICreateTaskFormValues = {
    ...task,
  };

  const handleBackBtnClick = () => {
    navigation("/");
  };

  const handleCreateTaskBtnClick = () => {};

  const handleUpdateTaskBtnClick = () => {};

  return (
    <div className="edit-task-page-container">
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
        <div className="page-title">View / Edit Task</div>
        <TaskFormContainer
          mode={Constants.taskFormContainerMode.editMode}
          initialFormValues={initialValues}
          onCreateTaskBtnClick={handleCreateTaskBtnClick}
          onUpdateTaskBtnClick={handleUpdateTaskBtnClick}
        />
      </div>
    </div>
  );
};

export default EditTask;
