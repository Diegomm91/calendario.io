import React from 'react';
import './TaskListComponent.css'; // Archivo CSS para estilos específicos

interface TaskListComponentProps {
  tasks?: any[]; // Prop para tareas, inicialmente vacío
  selectedDate: string; // Fecha seleccionada para filtrar tareas
  onAddTask: () => void; // Función para agregar una nueva tarea
  onEditTask: (task: any) => void; // Función para editar una tarea
  onDeleteTask: (taskId: string) => void; // Función para eliminar una tarea
}

export const TaskListComponent: React.FC<TaskListComponentProps> = ({ tasks = [], selectedDate, onAddTask, onEditTask, onDeleteTask }) => {
  const tasksForSelectedDate = tasks.filter(task => task.start === selectedDate);

  return (
    <div className="task-list-container">
      <h2>Tareas para {selectedDate}</h2>
      {tasksForSelectedDate.length === 0 ? (
        <div className="empty-state">
          <p>No tienes tareas para este día.</p>
          <button className="add-task-button" onClick={onAddTask}>Agregar Nueva Tarea</button>
        </div>
      ) : (
        <ul>
          {tasksForSelectedDate.map((task, index) => (
            <li key={index}>
              <strong>{task.title}</strong>
              {task.time && <span> ({task.time})</span>}
              {task.description && <p>{task.description}</p>}
              <div className="task-actions">
                <button className="edit-task-button" onClick={() => onEditTask(task)}>Modificar</button>
                <button className="delete-task-button" onClick={() => onDeleteTask(task.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {tasksForSelectedDate.length > 0 && (
        <div className="add-task-button-container">
          <button className="add-task-button" onClick={onAddTask}>Agregar Nueva Tarea</button>
        </div>
      )}
    </div>
  );
};