

interface Task {
  id: string;
  title: string;
  description: string;
  }

interface TaskListProps {
  tasks: Task[];
  
  onTaskClick: (task: Task) => void; 
  onCreateTask?: () => void;
}
