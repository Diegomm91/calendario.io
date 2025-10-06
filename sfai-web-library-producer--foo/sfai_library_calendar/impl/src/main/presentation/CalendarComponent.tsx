import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

interface CalendarComponentProps {
  events?: any[]; // Prop para eventos, inicialmente vacío
  onDateSelect?: (selectInfo: any) => void; // Callback para la selección de fecha
}

export const CalendarComponent: React.FC<CalendarComponentProps> = ({ events = [], onDateSelect }) => {
  return (
    <div className="calendar-component-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        locale={esLocale}
        selectable={true} // Habilitar la selección de fechas
        selectMirror={true}
        dayMaxEvents={true}
        events={events} // Array de eventos vacío por defecto
        height="auto"
        select={onDateSelect} // Asignar el callback a la propiedad select
      />
    </div>
  );
};