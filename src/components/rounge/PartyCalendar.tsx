import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PartyCalendar = () => {
  const [value, onChange] = useState<Date>(new Date());

  const handleChange = (value: any, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(value); // Thu May 11 2023 00:00:00 GMT+0900 (한국 표준시)
    if (value instanceof Date) {
      onChange(value);
    }
  };

  return <Calendar onChange={handleChange} value={value} />;
};

export default PartyCalendar;
