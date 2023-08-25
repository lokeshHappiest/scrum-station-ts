import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CircleIcon from "@mui/icons-material/Circle";
import Constants from "../../Constants";

import "./CustomCardFooter.scss";

interface ICustomCardFooterProps {
  avatarImg?: string;
  taskTId: string;
  taskType: string;
  taskPriority?: number;
}

const CustomCardFooter = ({
  avatarImg,
  taskTId,
  taskType,
  taskPriority,
}: ICustomCardFooterProps) => {
  return (
    <div className="custom-card-footer">
      <div
        className="status-id-container"
        data-testid="task-type-icon-container"
      >
        {taskType === Constants.taskType.feat ? (
          <BookmarkBorderIcon
            className="new-feat-icon"
            data-testid="new-feat-icon"
          />
        ) : (
          <CircleIcon className="bug-icon" data-testid="bug-icon" />
        )}
        <div className="task-id">{taskTId}</div>
      </div>
      <div className="priority-container">
        {taskPriority && (
          <span className="priority" data-testid="task-priority">
            {taskPriority}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomCardFooter;
