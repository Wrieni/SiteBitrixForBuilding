import { TaskList } from "../components/TaskList";
import { useState } from "react";

const mockTasks = [
  {
    id: "1",
    title: "First Task",
    description: "Description here",
    status: "new",
    priority: "medium",
    assignee: { id: "current-user", name: "Alice" },
    reporter: { id: "2", name: "Bob" },
    dueDate: new Date(),
    createdAt: new Date(),
    attachments: 0,
    observers: 2
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState(mockTasks);

  const handleTaskClick = (task: typeof mockTasks[0]) => {
    alert(`Clicked task: ${task.title}`);
  };

  return (
    <div className="p-6">
      <TaskList
        tasks={tasks}
        userRole="manager"
        onTaskClick={handleTaskClick}
        onCreateTask={() => alert("Create task clicked")}
      />
    </div>
  );
}
