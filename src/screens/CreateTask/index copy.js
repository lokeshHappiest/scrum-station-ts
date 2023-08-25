import { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
import * as Yup from "yup";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import "./CreateTask.scss";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "--TextField-brandColor": "#E0E3E7",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& label": {
              color: "var(--TextField-brandBorderColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            color: "var(--TextField-brandColor)",
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

const CreateTask = () => {
  const outerTheme = useTheme();
  const validationSchema = Yup.object({
    tId: Yup.string().required("Task Id cannot be empty."),
    title: Yup.string().required("Title cannot be empty."),
    type: Yup.string().required("Type cannot be empty."),
    status: Yup.string().required("Status cannot be empty."),
    priority: Yup.string().required("Priority cannot be empty."),
  });
  const formikRef = useRef();
  const [initialValues, setInitialValues] = useState(null);
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
  useEffect(() => {
    setInitialValues({
      tId: "",
      title: "",
      desc: "",
      type: "",
      status: "",
      priority: 10,
    });
  }, []);

  return (
    <div className="create-task-page-container">
      <div className="create-task-page-content">
        <div className="page-title">Create Task</div>
        {initialValues && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            innerRef={formikRef}
            enableReinitialize
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
              status,
              isValid,
              dirty,
              /* and other goodies */
            }) => (
              <div className="form-container">
                <div className="form-holder">
                  <form onSubmit={handleSubmit} className="form">
                    <ThemeProvider theme={customTheme(outerTheme)}>
                      <div className="tid-container">
                        <TextField
                          id="tId"
                          label="Task Id"
                          variant="outlined"
                          value={values.tId}
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          color="info"
                        />
                      </div>
                      <div className="task-title-container">
                        <TextField
                          id="title"
                          label="Title"
                          variant="outlined"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                          fullWidth
                        />
                      </div>
                      <div className="task-desc-container">
                        <TextareaAutosize
                          id="desc"
                          label="Description"
                          variant="outlined"
                          minRows={7}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.desc}
                        />
                      </div>
                    </ThemeProvider>
                  </form>
                </div>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default CreateTask;
