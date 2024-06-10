import React, { createContext, useState, ReactNode } from "react";

type DateContextType = {
  selectionRange: { startDate: Date; endDate: Date; key: string; };
  showCalendar: boolean;
  handleSetSelect: (ranges: any) => void;
  toggleCalendar: () => void;
};

const defaultValue: DateContextType = {
  selectionRange: { startDate: new Date(), endDate: new Date(), key: 'selection' },
  showCalendar: false,
  handleSetSelect: (ranges: any) => {},
  toggleCalendar: () => {}
};

export const DateContext = createContext<DateContextType | null>(null);

export const DateProvider = ({ children }: { children: ReactNode }) => {
  const [selectionRange, setSelectionRange] = useState<DateContextType['selectionRange']>(defaultValue.selectionRange);
  const [showCalendar, setShowCalendar] = useState<boolean>(defaultValue.showCalendar);

  const handleSetSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    setSelectionRange({
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
    });
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <DateContext.Provider value={{ selectionRange, showCalendar, handleSetSelect, toggleCalendar }}>
      {children}
    </DateContext.Provider>
  );
};
