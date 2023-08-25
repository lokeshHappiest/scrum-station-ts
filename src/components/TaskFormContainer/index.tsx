import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Formik, FormikState } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { addTask } from "../../redux/tasks/tasksReducer";
import Constants from "../../Constants";
import tempTaskStatuses from "../../tempJson/tempTaskStatuses";
import ICreateTaskFormValues from "../../Models/ICreateTaskFormValues";
import "./TaskFormContainer.scss";

interface ITaskFormContainer {
  initialFormValues: ICreateTaskFormValues;
  onCreateTaskBtnClick?: (values: ICreateTaskFormValues) => void;
  onUpdateTaskBtnClick?: (values: ICreateTaskFormValues) => void;
  mode: string;
}

const TaskFormContainer = ({
  initialFormValues,
  onCreateTaskBtnClick,
  onUpdateTaskBtnClick,
  mode = Constants.taskFormContainerMode.createMode,
}: ITaskFormContainer) => {
  const validationSchema = Yup.object({
    tId: Yup.string().required("Task Id cannot be empty."),
    title: Yup.string().required("Title cannot be empty."),
    type: Yup.string().required("Type cannot be empty."),
    status: Yup.string().required("Status cannot be empty."),
    priority: Yup.string().required("Priority cannot be empty."),
  });
  const dispatch = useDispatch();
  let existingTasks = [...useSelector(({ tasks }) => tasks.tasks)];
  const taskTypes: {
    [key: string]: string;
  } = Constants.taskType;
  const formikRef = useRef(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleCreateBtnClick = ({
    values,
    resetForm,
  }: {
    values: ICreateTaskFormValues;
    resetForm: (
      nextState?: Partial<FormikState<ICreateTaskFormValues>> | undefined
    ) => void;
  }) => {
    console.log(`handleCreateBtnClick values = ${values}`);
    // {
    //   id: 2,
    //   tId: "ecc-351",
    //   title: "create tasks data model",
    //   desc: "create tasks data model save it in js, and export it",
    //   type: "issue",
    //   status: "completed",
    //   createdDate: "2023-08-15T11:02:00+00:00",
    //   priority: 3,
    // }
    existingTasks.sort((taskA, taskB) => {
      console.log(`taskA = ${taskA.id},taskB = ${taskB.id}`);
      return taskB.id - taskA.id;
    });
    const nextId = existingTasks[0]?.id ? existingTasks[0]?.id + 1 : 1;
    const newTasks = {
      ...values,
      id: nextId,
    };
    setFormValues({ ...initialFormValues });
    resetForm();
    dispatch(addTask(newTasks));
    onCreateTaskBtnClick?.(values);
  };
  const handleUpdateBtnClick = ({
    values,
    resetForm,
  }: {
    values: ICreateTaskFormValues;
    resetForm: (
      nextState?: Partial<FormikState<ICreateTaskFormValues>> | undefined
    ) => void;
  }) => {
    onUpdateTaskBtnClick?.(values);
  };
  return (
    <div>
      {formValues && (
        <Formik
          initialValues={formValues}
          validationSchema={validationSchema}
          innerRef={formikRef}
          enableReinitialize
          onSubmit={() => {}}
        >
          {({
            values,
            setFieldValue,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setStatus,
            resetForm,
            status,
            isValid,
            dirty,
            /* and other goodies */
          }) => (
            <div className="form-container">
              <div className="form-holder">
                <form onSubmit={handleSubmit} className="form">
                  <div className="tid-container">
                    <div className="input-label">Task Id:</div>
                    <input
                      id="tId"
                      value={values.tId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="text-field"
                    />
                    <ErrorMessage name="tId" />
                  </div>
                  <div className="task-title-container">
                    <div className="input-label">Title:</div>
                    <input
                      id="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      className="text-field"
                    />
                    <ErrorMessage name="title" />
                  </div>
                  <div className="task-desc-container">
                    <div className="input-label">Description:</div>
                    <textarea
                      id="desc"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desc}
                      className="text-area"
                    />
                  </div>
                  {tempTaskStatuses && tempTaskStatuses.length && (
                    <div className="status-drp-container">
                      <div className="input-label">Status:</div>
                      <select
                        className="status-select"
                        id="status"
                        value={values.status}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="" selected>
                          select status
                        </option>
                        {tempTaskStatuses.map((status) => (
                          <option key={status.id} value={status.id}>
                            {status.title}
                          </option>
                        ))}
                      </select>
                      <ErrorMessage name="title" />
                    </div>
                  )}
                  {taskTypes && (
                    <div className="status-drp-container">
                      <div className="input-label">Type:</div>
                      <select
                        className="status-select"
                        id="type"
                        value={values.type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={""}
                      >
                        <option value="">select type</option>
                        {Object.entries(taskTypes).map(([key, value], i) => (
                          <option key={key} value={key}>
                            {taskTypes[key]}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="task-priority-container">
                    <div className="input-label">Priority:</div>
                    <select
                      className="priority-select"
                      id="priority"
                      value={values.priority}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      defaultValue={""}
                    >
                      <option value="">select priority</option>
                      {Constants.priorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage name="priority" />
                  </div>
                  <div>
                    <div className="btn-footer">
                      {mode === Constants.taskFormContainerMode.createMode && (
                        <Button
                          disabled={
                            !(dirty && isValid && (!status || status === ""))
                          }
                          className="create-task-btn"
                          variant="contained"
                          onClick={() =>
                            handleCreateBtnClick({ values, resetForm })
                          }
                        >
                          Create
                        </Button>
                      )}
                      {mode === Constants.taskFormContainerMode.editMode && (
                        <Button
                          disabled={
                            !(dirty && isValid && (!status || status === ""))
                          }
                          className="create-task-btn"
                          variant="contained"
                          onClick={() =>
                            handleUpdateBtnClick({ values, resetForm })
                          }
                        >
                          Update
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      )}
    </div>
  );
};

export default TaskFormContainer;
