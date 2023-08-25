import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomCardFooter from "../CustomCardFooter";

interface ICustomeCardContentProps {
  title?: string;
  taskTId: string;
  taskType: string;
  taskPriority?: number;
}

const CustomeCardContent = ({
  title,
  taskTId,
  taskType,
  taskPriority,
}: ICustomeCardContentProps) => (
  <>
    <CardContent>
      <Typography
        sx={{
          fontSize: 14,
          textAlign: "left",
        }}
        color="#fefefe"
        gutterBottom
      >
        {title ?? ""}
      </Typography>
    </CardContent>
    <CustomCardFooter
      taskTId={taskTId}
      taskType={taskType}
      taskPriority={taskPriority}
    />
  </>
);

export default CustomeCardContent;
