import { Card } from "./ui/Card";

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'new' | 'in-progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignee: {
    id: string;
    name: string;
    avatar: string;
  }
}

interface TaskCardProps{
    task: Task
    onTaskClick: (task: Task) => void;
}

export function TaskCard() {
    return (

    <Card className={'cursor-pointer'}>

    </Card>
    );
  };

    

    
