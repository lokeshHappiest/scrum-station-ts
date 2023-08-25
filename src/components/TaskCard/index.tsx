import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CustomeCardContent from "../CustomeCardContent";

import "./TaskCard.scss";

interface ITaskCardProps {
  title?: string;
  taskTId: string;
  taskType: string;
  taskPriority?: number;
  onClick: () => void;
}

export default function TaskCard({
  title,
  taskTId,
  taskType,
  taskPriority,
  onClick,
}: ITaskCardProps) {
  return (
    <Box className="task-card-container" onClick={onClick}>
      <Card variant="outlined" className="task-card">
        <CustomeCardContent
          title={title}
          taskTId={taskTId}
          taskType={taskType}
          taskPriority={taskPriority}
        />
      </Card>
    </Box>
  );
}
