import React, { useState, useEffect } from 'react';
import './TaskModal.css';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, time: string, description: string, date: string) => void;
  selectedDate: string;
  editingTask: any | null; // Prop para la tarea que se está editando
}

export const TaskModal: React.FC<TaskModalProps> = ({ isOpen, onClose, onSave, selectedDate, editingTask }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isOpen) {
      if (editingTask) {
        setTitle(editingTask.title);
        setTime(editingTask.time || '');
        setDescription(editingTask.description || '');
      } else {
        setTitle('');
        setTime('');
        setDescription('');
      }
    }
  }, [isOpen, editingTask]);

  const handleSave = () => {
    if (title.trim()) {
      onSave(title, time, description, selectedDate);
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editingTask ? 'Modificar Tarea' : 'Agregar Nueva Tarea'} para {selectedDate}</h2>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="modal-actions">
          <button className="modal-button save-button" onClick={handleSave}>Guardar</button>
          <button className="modal-button cancel-button" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};