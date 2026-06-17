import { useState } from "react";
import { Card, Badge, MonthGrid } from "../components";
import { isSameDay } from "../utils";

// PLACEHOLDER: hardcoded appointments for scaffold — replaced in Step 8
const PLACEHOLDER_APPOINTMENTS = [
  { date: new Date(2026, 5, 3), label: "J. Smith", color: "violet" },
  { date: new Date(2026, 5, 10), label: "R. Nguyen", color: "amber" },
  { date: new Date(2026, 5, 17), label: "M. Garcia", color: "violet" },
  { date: new Date(2026, 5, 24), label: "T. Chen", color: "sky" },
  { date: new Date(2026, 5, 9), label: "A. Patel", color: "amber" },
];

export default function CalendarPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  function handleMonthChange(newYear, newMonth) {
    setYear(newYear);
    setMonth(newMonth);
  }

  function renderDay(date) {
    const appointments = PLACEHOLDER_APPOINTMENTS.filter((appt) =>
      isSameDay(appt.date, date)
    );

    return (
      <div className="rounded-md p-1 text-xs text-slate-700 hover:bg-slate-50 h-full">
        <span className="text-slate-500 text-xs">{date.getDate()}</span>
        <div className="flex flex-col gap-0.5 mt-0.5">
          {appointments.map((appt, i) => (
            <Badge key={i} color={appt.color}>
              {appt.label}
            </Badge>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-slate-800">Calendar</h1>
        <p className="text-sm text-slate-500">View your scheduled appointments by month.</p>
      </div>
      <Card>
        <MonthGrid
          year={year}
          month={month}
          onMonthChange={handleMonthChange}
          renderDay={renderDay}
        />
      </Card>
    </div>
  );
}
