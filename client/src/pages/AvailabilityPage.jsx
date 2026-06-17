import { useState } from "react";
import { Card, MonthGrid } from "../components";
import { toDateKey } from "../utils";

export default function AvailabilityPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [unavailableDates, setUnavailableDates] = useState(new Set());

  function handleMonthChange(newYear, newMonth) {
    setYear(newYear);
    setMonth(newMonth);
  }

  function toggleDate(date) {
    const key = toDateKey(date);
    setUnavailableDates((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  function renderDay(date) {
    const key = toDateKey(date);
    const isUnavailable = unavailableDates.has(key);

    return (
      <div
        onClick={() => toggleDate(date)}
        className={`rounded-md p-1 h-full cursor-pointer flex flex-col ${
          isUnavailable
            ? "bg-rose-100 text-rose-700 font-medium"
            : "hover:bg-slate-100 text-slate-700"
        }`}
      >
        <span className="text-xs">{date.getDate()}</span>
        {isUnavailable && (
          <span className="text-xs mt-auto self-center select-none">✕</span>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-slate-800">Availability</h1>
        <p className="text-sm text-slate-500">Mark days when you are not available for appointments.</p>
      </div>

      <Card>
        <MonthGrid
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
          renderDay={renderDay}
        />
      </Card>

      <div className="mt-4 flex items-center gap-3">
        <div className="w-4 h-4 rounded bg-rose-100 border border-rose-200" />
        <span className="text-xs text-slate-500">Unavailable</span>
        <span className="text-xs text-slate-400 ml-2">Click a day to toggle availability</span>
      </div>
    </div>
  );
}
