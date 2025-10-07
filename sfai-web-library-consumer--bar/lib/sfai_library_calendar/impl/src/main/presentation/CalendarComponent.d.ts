import React from 'react';
interface CalendarComponentProps {
    events?: any[];
    onDateSelect?: (selectInfo: any) => void;
}
export declare const CalendarComponent: React.FC<CalendarComponentProps>;
export {};
