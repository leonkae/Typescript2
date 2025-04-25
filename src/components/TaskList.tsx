import { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListItems {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListItems> = ({
  tasks,
  toggleTask,
  deleteTask,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>please add a task to start</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
