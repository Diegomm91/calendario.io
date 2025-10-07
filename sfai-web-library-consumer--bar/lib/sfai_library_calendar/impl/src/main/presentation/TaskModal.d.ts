import React from 'react';
import './TaskModal.css';
interface TaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (title: string, time: string, description: string, date: string) => void;
    selectedDate: string;
    editingTask: any | null;
}
export declare const TaskModal: React.FC<TaskModalProps>;
export {};
