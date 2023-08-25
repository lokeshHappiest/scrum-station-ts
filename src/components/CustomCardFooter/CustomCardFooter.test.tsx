import React from "react";
import { render, screen } from "@testing-library/react";
import CustomCardFooter from ".";

describe("Custome card footer test cases", () => {
  test("check whether value is not empty", () => {
    render(
      <CustomCardFooter
        taskTId={"cc-1"}
        taskType={"new-feature"}
        taskPriority={10}
      />
    );
    expect(screen.getByText("cc-1")).toBeTruthy();
  });
  test("check if new feature icon getting displayed for new-feature task type", () => {
    render(
      <CustomCardFooter
        taskTId={"cc-1"}
        taskType="new-feature"
        taskPriority={10}
      />
    );
    expect(screen.getByTestId("new-feat-icon")).toBeTruthy();
  });
  test("check if bug icon getting displayed for issue task type", () => {
    render(
      <CustomCardFooter taskTId={"cc-1"} taskType={"issue"} taskPriority={10} />
    );
    expect(screen.getByTestId("bug-icon")).toBeTruthy();
  });
  test("empty taskPriority handled", () => {
    render(<CustomCardFooter taskTId={"cc-1"} taskType={"new-feature"} />);
    expect(screen.queryByTestId("task-priority")).toBeFalsy();
  });
  test("check passed taskPriority getting shown", () => {
    render(
      <CustomCardFooter
        taskTId={"cc-1"}
        taskType={"new-feature"}
        taskPriority={4}
      />
    );
    expect(screen.getByTestId("task-priority")).toBeTruthy();
  });
});
