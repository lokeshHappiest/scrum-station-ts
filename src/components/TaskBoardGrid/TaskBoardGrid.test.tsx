import React from "react";
import { render, screen } from "@testing-library/react";
import TaskBoardGrid from ".";
import tempTasks from "../../tempJson/tempTasks";
import tempTaskStatuses from "../../tempJson/tempTaskStatuses";

describe("Custom card footer test cases", () => {
  test("number of columns getting shown properly", () => {
    render(
      <TaskBoardGrid
        tasks={tempTasks}
        statuses={tempTaskStatuses}
        onItemClick={(task) => {
          console.log("task");
        }}
      />
    );
    expect(screen.queryAllByTestId("status-grid")).toHaveLength(3);
  });
  //   test("number of tasks getting shown properly", () => {
  //     render(
  //       <TaskBoardGrid
  //         tasks={tempTasks}
  //         statuses={tempTaskStatuses}
  //         onItemClick={(task) => {
  //           console.log("task");
  //         }}
  //       />
  //     );
  //     const statusGrids = screen.queryAllByTestId("status-grid");
  //     expect(statusGrids[0]).toHaveLength(3);
  //   });
});
