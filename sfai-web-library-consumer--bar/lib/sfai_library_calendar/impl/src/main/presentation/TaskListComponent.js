import React from 'react';
import './TaskListComponent.css'; // Archivo CSS para estilos específicos
export const TaskListComponent = ({ tasks = [], selectedDate, onAddTask, onEditTask, onDeleteTask }) => {
    const tasksForSelectedDate = tasks.filter(task => task.start === selectedDate);
    return (React.createElement("div", { className: "task-list-container" },
        React.createElement("h2", null,
            "Tareas para ",
            selectedDate),
        tasksForSelectedDate.length === 0 ? (React.createElement("div", { className: "empty-state" },
            React.createElement("p", null, "No tienes tareas para este d\u00EDa."),
            React.createElement("button", { className: "add-task-button", onClick: onAddTask }, "Agregar Nueva Tarea"))) : (React.createElement("ul", null, tasksForSelectedDate.map((task, index) => (React.createElement("li", { key: index },
            React.createElement("strong", null, task.title),
            task.time && React.createElement("span", null,
                " (",
                task.time,
                ")"),
            task.description && React.createElement("p", null, task.description),
            React.createElement("div", { className: "task-actions" },
                React.createElement("button", { className: "edit-task-button", onClick: () => onEditTask(task) }, "Modificar"),
                React.createElement("button", { className: "delete-task-button", onClick: () => onDeleteTask(task.id) }, "Eliminar"))))))),
        tasksForSelectedDate.length > 0 && (React.createElement("div", { className: "add-task-button-container" },
            React.createElement("button", { className: "add-task-button", onClick: onAddTask }, "Agregar Nueva Tarea")))));
};
//# sourceMappingURL=TaskListComponent.js.map