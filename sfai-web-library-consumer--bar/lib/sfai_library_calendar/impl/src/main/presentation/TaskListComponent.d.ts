import React from 'react';
import './TaskListComponent.css';
interface TaskListComponentProps {
    tasks?: any[];
    selectedDate: string;
    onAddTask: () => void;
    onEditTask: (task: any) => void;
    onDeleteTask: (taskId: string) => void;
}
export declare const TaskListComponent: React.FC<TaskListComponentProps>;
export {};
