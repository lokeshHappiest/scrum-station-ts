import React from "react";
import { render, screen } from "@testing-library/react";
import CustomeCardContent from ".";

describe("Custome card footer test cases", () => {
  test("check whether title is getting displayed", () => {
    render(
      <CustomeCardContent
        title="create a create new task button ui"
        taskTId="cc-1"
        taskType="issue"
        taskPriority={8}
      />
    );
    expect(screen.getByText("create a create new task button ui")).toBeTruthy();
  });
  test("check whether title is not getting displayed, when not passed", () => {
    render(
      <CustomeCardContent taskTId="cc-1" taskType="issue" taskPriority={8} />
    );
    expect(
      screen.queryByText("create a create new task button ui")
    ).toBeFalsy();
  });
});
