import React, { useState, useEffect } from 'react';
import './TaskModal.css';
export const TaskModal = ({ isOpen, onClose, onSave, selectedDate, editingTask }) => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        if (isOpen) {
            if (editingTask) {
                setTitle(editingTask.title);
                setTime(editingTask.time || '');
                setDescription(editingTask.description || '');
            }
            else {
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
    return (React.createElement("div", { className: "modal-overlay" },
        React.createElement("div", { className: "modal-content" },
            React.createElement("h2", null,
                editingTask ? 'Modificar Tarea' : 'Agregar Nueva Tarea',
                " para ",
                selectedDate),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "title" }, "T\u00EDtulo:"),
                React.createElement("input", { type: "text", id: "title", value: title, onChange: (e) => setTitle(e.target.value), required: true })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "time" }, "Hora:"),
                React.createElement("input", { type: "time", id: "time", value: time, onChange: (e) => setTime(e.target.value) })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "description" }, "Descripci\u00F3n:"),
                React.createElement("textarea", { id: "description", value: description, onChange: (e) => setDescription(e.target.value) })),
            React.createElement("div", { className: "modal-actions" },
                React.createElement("button", { className: "modal-button save-button", onClick: handleSave }, "Guardar"),
                React.createElement("button", { className: "modal-button cancel-button", onClick: onClose }, "Cancelar")))));
};
//# sourceMappingURL=TaskModal.js.map