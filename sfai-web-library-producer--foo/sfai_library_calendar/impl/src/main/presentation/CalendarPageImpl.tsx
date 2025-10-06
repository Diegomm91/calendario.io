import React, { useState } from 'react';
import './CalendarPage.css';
import { CalendarComponent } from './CalendarComponent';
import { TaskListComponent } from './TaskListComponent';
import { TaskModal } from './TaskModal'; // Importar el nuevo componente TaskModal

interface Task {
  id: string;
  title: string;
  start: string;
  allDay: boolean;
  time?: string;
  description?: string;
}

export const CalendarPageImpl: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextTaskId, setNextTaskId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null); // Estado para la tarea que se está editando

  const handleDateSelect = (selectInfo: any) => {
    setSelectedDate(selectInfo.startStr);
    // No abrir el modal aquí, solo actualizar la fecha seleccionada
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
  };

  const handleAddTaskClick = () => {
    setEditingTask(null); // Asegurarse de que no estamos editando una tarea existente
    setIsModalOpen(true);
  };

  const handleSaveTask = (title: string, time: string, description: string, date: string) => {
    if (editingTask) {
      // Lógica para editar una tarea existente
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...task, title, time, description, start: date, allDay: !time }
            : task
        )
      );
    } else {
      // Lógica para agregar una nueva tarea
      const newTask: Task = {
        id: String(nextTaskId),
        title,
        start: date,
        allDay: !time, // Si hay hora, no es allDay
        time,
        description,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNextTaskId((prevId) => prevId + 1);
    }
    setIsModalOpen(false);
  };

  const handleEditTask = (taskToEdit: Task) => {
    setEditingTask(taskToEdit);
    setSelectedDate(taskToEdit.start); // Establecer la fecha seleccionada para el modal de edición
    setIsModalOpen(true);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null); // Limpiar la tarea en edición al cerrar el modal
  };

  return (
    <div className="calendar-page-container">
      <CalendarComponent events={tasks} onDateSelect={handleDateSelect} />
      <TaskListComponent
        tasks={tasks}
        selectedDate={selectedDate}
        onAddTask={handleAddTaskClick}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        selectedDate={selectedDate}
        editingTask={editingTask} // Pasar la tarea en edición al modal
      />
    </div>
  );
};
export default CalendarPageImpl;