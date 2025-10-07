import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
export const CalendarComponent = ({ events = [], onDateSelect }) => {
    return (React.createElement("div", { className: "calendar-component-container" },
        React.createElement(FullCalendar, { plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], initialView: "dayGridMonth", headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }, locale: esLocale, selectable: true, selectMirror: true, dayMaxEvents: true, events: events, height: "auto", select: onDateSelect })));
};
//# sourceMappingURL=CalendarComponent.js.map