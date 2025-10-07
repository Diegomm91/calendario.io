import React, { useState } from 'react';
import './CalendarPage.css';
import { CalendarComponent } from './CalendarComponent.js';
import { TaskListComponent } from './TaskListComponent.js';
import { TaskModal } from './TaskModal.js'; // Importar el nuevo componente TaskModal
export const CalendarPageImpl = () => {
    const [tasks, setTasks] = useState([]);
    const [nextTaskId, setNextTaskId] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [editingTask, setEditingTask] = useState(null); // Estado para la tarea que se está editando
    const handleDateSelect = (selectInfo) => {
        setSelectedDate(selectInfo.startStr);
        // No abrir el modal aquí, solo actualizar la fecha seleccionada
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
    };
    const handleAddTaskClick = () => {
        setEditingTask(null); // Asegurarse de que no estamos editando una tarea existente
        setIsModalOpen(true);
    };
    const handleSaveTask = (title, time, description, date) => {
        if (editingTask) {
            // Lógica para editar una tarea existente
            setTasks((prevTasks) => prevTasks.map((task) => task.id === editingTask.id
                ? { ...task, title, time, description, start: date, allDay: !time }
                : task));
        }
        else {
            // Lógica para agregar una nueva tarea
            const newTask = {
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
    const handleEditTask = (taskToEdit) => {
        setEditingTask(taskToEdit);
        setSelectedDate(taskToEdit.start); // Establecer la fecha seleccionada para el modal de edición
        setIsModalOpen(true);
    };
    const handleDeleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingTask(null); // Limpiar la tarea en edición al cerrar el modal
    };
    return (React.createElement("div", { className: "calendar-page-container" },
        React.createElement(CalendarComponent, { events: tasks, onDateSelect: handleDateSelect }),
        React.createElement(TaskListComponent, { tasks: tasks, selectedDate: selectedDate, onAddTask: handleAddTaskClick, onEditTask: handleEditTask, onDeleteTask: handleDeleteTask }),
        React.createElement(TaskModal, { isOpen: isModalOpen, onClose: handleCloseModal, onSave: handleSaveTask, selectedDate: selectedDate, editingTask: editingTask })));
};
export default CalendarPageImpl;
//# sourceMappingURL=CalendarPageImpl.js.map